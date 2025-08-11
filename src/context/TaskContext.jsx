import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [dailyTask, setDailyTask] = useState([]);
  const [goals, setGoals] = useState([]);
  const { api, accessToken } = useContext(AuthContext);

  const fetchTask = async () => {
    try {
      const response = await api.get("api/daily-task");

      if (response.status === 200) {
        setDailyTask(response.data);
      } else {
        console.warn("Unexpected response:", response);
      }
    } catch (error) {
      console.error(error.message || error);
    }
  };

  const fetchLongTermGoals = async () => {
    try {
      const response = await api.get("api/long-term-goals");
      if (response.status === 200) {
        setGoals(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (accessToken) {
      fetchTask();
      fetchLongTermGoals();
    }
  }, [accessToken]);

  const value = {
    dailyTask,
    setDailyTask,
    goals,
    setGoals,
    fetchLongTermGoals,
    fetchTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContext;

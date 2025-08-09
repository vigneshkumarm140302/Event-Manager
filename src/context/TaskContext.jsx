import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [goals, setGoals] = useState([]);
  const date = new Date();
  const { api } = useContext(AuthContext);

  const fetchTask = async () => {
    try {
      const response = await api.get("api/daily-task");

      if (response.status === 200) {
        setData(response.data);
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
    fetchTask();
    fetchLongTermGoals();
  }, []);

  const value = {
    data,
    date,
    setData,
    goals,
    setGoals,
    fetchLongTermGoals,
    
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContext;

import { createContext, useState } from "react";
import  { taskData, dummyGoalTasks } from "../assets/assets";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState(taskData)
  const [goals, setGoals] = useState(dummyGoalTasks)
  const date = new Date()
  const value = {data, date, setData, goals, setGoals};
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export default TaskContext;

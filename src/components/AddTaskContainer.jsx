import React, { useContext, useState } from "react";
import assets, { taskData } from "../assets/assets";
import AuthContext from "../context/AuthContext";

const AddTaskContainer = ({ date, setShowContainer }) => {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState("1");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");
  const { api } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hour24 =
      ampm === "PM" && hour !== "12"
        ? parseInt(hour) + 12
        : ampm === "AM" && hour === "12"
        ? 0
        : parseInt(hour);

    const [day, month, year] = date.split("-").map(Number);

    const dateObj = new Date(year, month - 1, day, hour24, parseInt(minute), 0);

    try {
      const response = await api.post("api/daily-task", {
        task: task,
        date: dateObj,
        compleated: false,
      });
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }

    setShowContainer(false);
  };

  return (
    <div className="bg-stone-300 py-6 px-3 pt-12 relative">
      <img
        src={assets.close}
        alt=""
        className="absolute top-1 right-1 w-8"
        onClick={() => setShowContainer(false)}
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          className="border bg-white w-full rounded p-4"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>

        <div className="flex justify-between  mt-4">
          <p className=" bg-white border px-4 py-2 rounded">Time :</p>

          <select
            className=" bg-white border px-4 py-2 rounded"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          >
            {Array.from({ length: 12 }, (_, i) => {
              const hour = i + 1;
              return (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
          <select
            className=" bg-white border px-4 py-2 rounded"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
          >
            {Array.from({ length: 60 }, (_, i) => {
              const minute = i.toString().padStart(2, "0");
              return (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              );
            })}
          </select>

          <select
            className=" bg-white border px-4 py-2 rounded"
            value={ampm}
            onChange={(e) => setAmPm(e.target.value)}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-center w-full py-2 bg-green-500 mt-4 rounded text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTaskContainer;

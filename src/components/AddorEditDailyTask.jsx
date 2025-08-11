import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import AuthContext from "../context/AuthContext";
import { useParams } from "react-router-dom";
import TaskContext from "../context/TaskContext";

const AddorEditDailyTask = ({ editId = null, setShowContainer }) => {
  const { date } = useParams();
  const { dailyTask, fetchTask } = useContext(TaskContext);
  const [task, setTask] = useState("");
  const [hour, setHour] = useState("01");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");
  const { api } = useContext(AuthContext);

  const EditData = () => {
    let temp = dailyTask.find((item) => item.id === editId);
    if (!temp) {
      return null;
    }
    let [time, period] = new Date(temp.date)
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .split(" ");

    let [h, m] = time.split(":");
    setHour(h);
    setMinute(m);

    setAmPm(period.toUpperCase());
    setTask(temp.task);
  };

  useEffect(() => {
    if (editId !== null) {
      EditData();
    }
  }, [editId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hour24 =
      ampm === "PM" && hour !== "12"
        ? parseInt(hour) + 12
        : ampm === "AM" && hour === "12"
        ? 0
        : parseInt(hour);

    if (editId) {

      let temp = dailyTask.find(item => item.id === editId)
      let [d, m, y] = new Date(temp.date).toLocaleDateString().split('/')
      const dateObj = new Date(
        y,
        m - 1,
        d,
        hour24,
        parseInt(minute),
        0
      );
      
      
      try {
        const response = await api.patch(`api/daily-task-edit/${editId}`, {
          task: task,
          date: dateObj,
        });
        console.log(response);
        if (response.status === 200) {
          fetchTask();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const [day, month, year] = date.split("-").map(Number);

      const dateObj = new Date(
        year,
        month - 1,
        day,
        hour24,
        parseInt(minute),
        0
      );
      try {
        const response = await api.post("api/daily-task", {
          task: task,
          date: dateObj,
          compleated: false,
        });
        if (response.status === 201) {
          fetchTask();
        }
      } catch (error) {
        console.log(error);
      }
    }

    setShowContainer(false);
  };

  return (
    <div className="bg-stone-300 py-6 px-3 pt-12 relative rounded border w-full">
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
              const hour = i.toString().padStart(2, "0");
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

export default AddorEditDailyTask;

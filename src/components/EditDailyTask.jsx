import React, { useContext, useEffect, useState } from "react";
import assets, { taskData } from "../assets/assets";
import TaskContext from "../context/TaskContext";

const EditDailyTask = ({ setEdit, id, fetchTodayTask }) => {
  const [task, setTask] = useState("");
  const [hour, setHour] = useState("1");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");

  const { data } = useContext(TaskContext);

  const getEditData = () => {
    const temp = data.find((item) => item.id === id);
    if (!temp) return;

    const date = new Date(temp.date);
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    const [time, period] = date.toLocaleTimeString("en-US", options).split(" ");
    const [h, m] = time.split(":");

    setTask(temp.task);
    if (h.startsWith("0")) {
      setHour(h[1]);
    } else {
      setHour(h);
    }

    setMinute(m);
    setAmPm(period);
  };

  useEffect(() => {
    getEditData();
  }, []);

  const handleSave = (e) => {
    e.preventDefault();

    const temp = data.find((item) => item.id === id);
    if (!temp) return;

    const hour24 =
      ampm === "PM" && hour !== "12"
        ? parseInt(hour) + 12
        : ampm === "AM" && hour === "12"
        ? 0
        : parseInt(hour);

    const oldDate = new Date(temp.date);
    const newDate = new Date(
      oldDate.getFullYear(),
      oldDate.getMonth(),
      oldDate.getDate(),
      hour24,
      parseInt(minute),
      0
    );

    const index = taskData.findIndex((item) => item.id === id);
    if (index !== -1) {
      taskData[index] = {
        ...taskData[index],
        task: task,
        date: newDate.toISOString(),
      };
    }

    setEdit(false);
    fetchTodayTask();
  };

  return (
    <div className="bg-stone-300 py-6 px-3 pt-12 relative rounded-lg shadow-xl w-[90%] max-w-md">
      <img
        src={assets.close}
        alt="Close"
        className="absolute top-2 right-2 w-8 cursor-pointer"
        onClick={() => setEdit(false)}
      />
      <form onSubmit={handleSave}>
        <textarea
          className="border bg-white w-full rounded p-4"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>

        <div className="flex justify-between items-center mt-4 gap-2">
          <p className=" bg-white border px-4 py-2 rounded">Time :</p>

          <select
            className=" bg-white border px-4 py-2 rounded"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          >
            {Array.from({ length: 12 }, (_, i) => {
              const h = (i + 1).toString();
              return (
                <option key={h} value={h}>
                  {h}
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
              const m = i.toString().padStart(2, "0");
              return (
                <option key={m} value={m}>
                  {m}
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
          Save
        </button>
      </form>
    </div>
  );
};

export default EditDailyTask;

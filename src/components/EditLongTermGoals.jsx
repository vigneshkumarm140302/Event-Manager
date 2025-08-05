import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import TaskContext from "../context/TaskContext";

const EditLongTermGoals = ({ id = null, setShowContainer }) => {
  const { goals, setGoals } = useContext(TaskContext);

  const [task, setTask] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");


  useEffect(() => {
    if (id != null) {
      const existing = goals.find((item) => item.id === id);
      if (existing) {
        setTask(existing.task || "");
        const fromDate = existing.from ? new Date(existing.from).toISOString().slice(0, 10) : "";
        const toDate = existing.end ? new Date(existing.end).toISOString().slice(0, 10) : "";
        setFrom(fromDate);
        setTo(toDate);
      }
    } else {
      setTask("");
      setFrom("");
      setTo("");
    }
  }, [id, goals]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return alert("Please enter a task.");
    if (!from || !to) return alert("Please choose both From and To dates.");

    const fromISO = new Date(from).toISOString();
    const toISO = new Date(to).toISOString();

    if (id != null) {
      const updated = goals.map((g) =>
        g.id === id
          ? { ...g, task: task.trim(), from: fromISO, end: toISO }
          : g
      );
      setGoals(updated);
    } else {
      const newItem = {
        id: goals.length + 1, 
        task: task.trim(),
        from: fromISO,
        end: toISO,
        compleated: false,
      };
      setGoals([...goals, newItem]);
    }

    setShowContainer(false);
  };

  return (
    <div className="bg-white px-6 w-full rounded-lg py-16 relative max-w-lg">
      <img
        src={assets.close}
        className="absolute top-2 right-2 w-10 cursor-pointer"
        alt="close"
        onClick={() => setShowContainer(false)}
      />
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <textarea
          rows={5}
          className="border border-gray-600 rounded-lg p-2"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Describe the long term goal..."
          required
        />

        <p>Duration</p>
        <div className="flex justify-between gap-4">
          <div className="flex-1">
            <p className="mb-1">From :</p>
            <input
              className="border border-gray-600 rounded-lg py-1.5 px-3 w-full"
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <p className="mb-1">To :</p>
            <input
              className="border border-gray-600 rounded-lg py-1.5 px-3 w-full"
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>
        </div>

        <button className="bg-amber-600 text-white py-2 rounded-lg mt-3">
          {id != null ? "Update Long Goal" : "Add to Long Goals"}
        </button>
      </form>
    </div>
  );
};

export default EditLongTermGoals;

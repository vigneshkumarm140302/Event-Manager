import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import TaskContext from "../context/TaskContext";
import AuthContext from "../context/AuthContext";

const EditLongTermGoals = ({ id = null, setShowContainer }) => {
  const { goals, fetchLongTermGoals } = useContext(TaskContext);
  const { api } = useContext(AuthContext);

  const [task, setTask] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    if (id != null) {
      const existing = goals.find((item) => item.id === id);
      if (existing) {
        setTask(existing.task || "");

        let tempStateDate = existing.start_date
          ? new Date(existing.start_date).toISOString().slice(0, 10)
          : "";
        let TempEndDate = existing.end_date
          ? new Date(existing.end_date).toISOString().slice(0, 10)
          : "";
        setStart(tempStateDate);
        setEnd(TempEndDate);
      }
    } else {
      setTask("");
      setStart("");
      setEnd("");
    }
  }, [id, goals]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const start_date = new Date(start).toLocaleDateString();
    const end_date = new Date(end).toLocaleDateString();
    if (id != null) {
      try {
        const response = await api.patch(`api/long-term-goals-edit/${id}`, {
          task: task.trim(),
          start_date: start_date,
          end_date: end_date,
          compleated: false,
        });

        if (response.status === 200) {
          fetchLongTermGoals();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await api.post("api/long-term-goals", {
          task: task.trim(),
          start_date: start_date,
          end_date: end_date,
          compleated: false,
        });

        if (response.status === 201) {
          updateGoal(response.data);
          fetchLongTermGoals();
        }
      } catch (error) {
        console.log(error);
      }
    }

    setShowContainer(false);
  };

  return (
    <div className="bg-white px-6 w-full border rounded-lg py-16 relative max-w-lg">
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
        <div className="flex justify-between gap-1 ">
          <div className="flex-1">
            <p className="mb-1">From :</p>
            <input
              className="border border-gray-600 rounded-lg py-1.5 px-3 w-full"
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <p className="mb-1">To :</p>
            <input
              className="border border-gray-600 rounded-lg py-1.5 px-3 w-full"
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
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

import { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import assets from "../assets/assets";
import AuthContext from "../context/AuthContext";

export const LongTermGoalContainer = ({
  data,
  setShowContainer,
  setEditId,
}) => {
  const { goals, fetchLongTermGoals } = useContext(TaskContext);
  const { api } = useContext(AuthContext);

  const compleatetask = async () => {
    try {
      const response = await api.patch(`api/long-term-goals-edit/${data.id}`, {
        compleated: true,
      });
      if (response.status === 200) {
        fetchLongTermGoals();
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (data === null) {
    return;
  }
  return (
    <div className="border rounded-lg border-gray-500">
      <div className="flex items-center  py-4 px-2 bg-amber-200 rounded-t-lg">
        <div className="w-[90%]">
          <p className="text-lg">{data.task}</p>
          <p className="text-sm">
            Duration : {new Date(data.start_date).toLocaleDateString()} -{" "}
            {new Date(data.end_date).toLocaleDateString()}
          </p>
        </div>
        <div className="w-[10%]">
          <img
            src={assets.edit}
            onClick={() => {
              setEditId(data.id);
              setShowContainer(true);
            }}
            className="mx-auto"
            alt=""
          />
        </div>
      </div>
      <button
        onClick={compleatetask}
        className="w-full bg-amber-700 text-white py-1 rounded-b-lg"
      >
        Compleated
      </button>
    </div>
  );
};

export const LongTermGoalCompleateContainer = ({ data }) => {
  if (data === null) {
    return;
  }
  return (
    <div className="flex items-center border border-green-500 rounded-lg bg-green-200 py-4 px-2">
      <div className="w-[85%] ">
        <p className="text-lg mb-1">{data.task}</p>
        <p className="text-sm">
          Duration : {new Date(data.start_date).toLocaleDateString()} -{" "}
          {new Date(data.start_date).toLocaleDateString()}{" "}
        </p>
      </div>
      <div className="w-[15%] ">
        <img src={assets.tick} alt="" className="w-10" />
      </div>
    </div>
  );
};

export const LongTermGoalIncompleateContainer = ({ data }) => {
  if (data === null) {
    return;
  }
  return (
    <div className="flex items-center border border-red-500 rounded-lg bg-red-200 py-4 px-2">
      <div className="w-[85%] ">
        <p className="text-lg mb-1">{data.task}</p>
        <p className="text-sm">
          Duration : {new Date(data.start_date).toLocaleDateString()} -{" "}
          {new Date(data.start_date).toLocaleDateString()}{" "}
        </p>
      </div>
      <div className="w-[15%] ">
        <img src={assets.close2} alt="" className="w-10" />
      </div>
    </div>
  );
};

export const DailyTaskContainer = ({ item, setEditId, setShowContainer }) => {
  const { fetchTask } = useContext(TaskContext);
  const { api } = useContext(AuthContext);

  const handleCompleated = async () => {
    try {
      const response = await api.patch(`/api/daily-task-edit/${item.id}`, {
        compleated: true,
      });
      if (response.status === 200) {
        fetchTask();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border rounded-lg border-gray-500">
      <div className="py-4 px-2 flex items-center  ">
        <div className="w-[90%]">
          <p className="text-lg ">{item.task}</p>
          <p className="text-sm">
            Time :{" "}
            {new Date(item.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
        <div className="w-[10%]">
          <img
            onClick={() => {
              setEditId(item.id)
              setShowContainer(true)
            }}
            src={assets.edit}
            alt=""
          />
        </div>
      </div>
      <button
        onClick={handleCompleated}
        className="w-full bg-green-500 text-white py-1 rounded-b-lg"
      >
        Compleated
      </button>
    </div>
  );
};

export const DailTaskCompleatedContainer = ({ item }) => {
  return (
    <div className="flex items-center border border-green-500 rounded-lg bg-green-200 py-4 px-2">
      <div className="w-[85%] ">
        <p className="text-lg mb-1">{item.task}</p>
        <p className="text-sm">
          Time :{" "}
          {new Date(item.date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
      <div className="w-[15%] ">
        <img src={assets.tick} alt="" className="w-10" />
      </div>
    </div>
  );
};


export const DailyTaskDeleteContainer = ({ item, setEditId, setShowContainer }) => {
  const { fetchTask } = useContext(TaskContext);
  const { api } = useContext(AuthContext);

  const handleDelete = async () => {
    try {
      const response = await api.delete(`/api/daily-task-delete/${item.id}`);
      if (response.status === 204) {
        fetchTask();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="border rounded-lg border-gray-500">
      <div className="py-4 px-2 flex items-center  ">
        <div className="w-[90%]">
          <p className="text-lg ">{item.task}</p>
          <p className="text-sm">
            Time :{" "}
            {new Date(item.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
        <div className="w-[10%]">
          <img
            onClick={() => {
              setEditId(item.id)
              setShowContainer(true)
            }}
            src={assets.edit}
            alt=""
          />
        </div>
      </div>
      <button
        onClick={handleDelete}
        className="w-full bg-red-500 text-white py-1 rounded-b-lg"
      >
        Compleated
      </button>
    </div>
  );
};
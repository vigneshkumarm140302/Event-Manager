import { useContext, useEffect, useState } from "react";
import TaskContext from "../context/TaskContext";
import assets from "../assets/assets";
import AuthContext from "../context/AuthContext";

export const LongTermGoalContainer = ({ data, setShowContainer, setEditId }) => {
  const { goals, fetchLongTermGoals } = useContext(TaskContext);
  const { api } = useContext(AuthContext);



  const compleatetask = async () => {
    try {
      const response = await api.patch(`api/long-term-goals-edit/${data.id}`, {
        compleated: true,
      });
      if (response.status === 200){
        fetchLongTermGoals()
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
          <p className="text-xs">
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
        <p className="text-xs">
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
        <p className="text-xs">
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

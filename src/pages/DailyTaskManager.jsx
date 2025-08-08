import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import assets from "../assets/assets";
import { useParams } from "react-router-dom";
import AddTaskContainer from "../components/AddTaskContainer";
import TaskContext from "../context/TaskContext";
import EditDailyTask from "../components/EditDailyTask";

const DailyTaskManager = () => {
  const { date } = useParams();
  const [showContainer, setShowContainer] = useState(false);
  const { data, setData } = useContext(TaskContext);
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);
  const [d, m, y] = date.split("-").map((item) => parseInt(item));

  const today = new Date(y, m - 1, d).toLocaleDateString();


  const current_selection = new Date(y, m - 1, d).toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const current_select_weekday = new Date(y, m - 1, d).toLocaleDateString('en-IN', {
  weekday: 'long',
});
  

  const fetchTodayTask = () => {
    let tempData = data.filter(
      (item) => new Date(item.date).toLocaleDateString() == today
    );

    setTasks(tempData);
  };

  useEffect(() => {
    fetchTodayTask();
  }, [data]);

  const compleateTask = (id) => {
    let temDate = data.filter((item) => item.id !== id);
    setData(temDate);
    fetchTodayTask();
  };

  return (
    <div className="h-[92vh] px-4 overflow-y-auto ">
      <div className="p-2">
        <h2 className="text-3xl">Add Event</h2>
        <p className="text-lg mt-2"> {current_selection} - {current_select_weekday}</p>
        <hr className="mt-4 text-slate-600" />
      </div>
      <img
        src={assets.add}
        onClick={() => setShowContainer(!showContainer)}
        alt=""
        className="w-16 fixed bottom-24 right-3 bg-white rounded-full"
      />
      {showContainer && (
        <AddTaskContainer date={date} setShowContainer={setShowContainer} />
      )}
      <div className="flex flex-col gap-6 py-4 ">
        {tasks.map(
          (item) =>
            item.compleated === false && (
              <div className="border border-gray-500 rounded-lg ">
                {edit === item.id && (
                  <div className="fixed h-[92vh] min-w-full left-0 top-0 flex justify-center items-center">
                    <EditDailyTask
                      setEdit={() => setEdit(null)}
                      id={item.id}
                      fetchTodayTask={fetchTodayTask}
                    />
                  </div>
                )}
                <div className="px-4 py-2 flex justify-between">
                  <div className="">
                    <p className="text-lg">{item.task}</p>
                    <p className="text-sm">
                      Time :{" "}
                      {new Date(item.date).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                  <div>
                    <img
                      src={assets.edit}
                      alt=""
                      onClick={() => setEdit(item.id)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => compleateTask(item.id)}
                  className="text-center py-1.5 bg-red-500 text-white w-full rounded-b-lg"
                >
                  Delete
                </button>
              </div>
            )
        )}

        <h2 className="text-2xl">Compleated Tasks</h2>
        {tasks.map(
          (item) =>
            item.compleated === true && (
              <div className="border border-green-500 rounded-lg p-4  flex justify-between items-center bg-green-100">
                <div className="">
                  <p className="text-lg">{item.task}</p>
                  <p className="text-sm">
                    Time :{" "}
                    {new Date(item.date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
                <div className="">
                  <img src={assets.tick} className="w-10" alt="" />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default DailyTaskManager;

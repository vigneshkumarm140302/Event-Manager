import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { useParams } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import { DailTaskCompleatedContainer, DailyTaskDeleteContainer } from "../components/TaskContainers";
import AddorEditDailyTask from "../components/AddorEditDailyTask";

const DailyTaskManager = () => {
  const { date } = useParams();
  const { dailyTask } = useContext(TaskContext);
  const [showContainer, setShowContainer] = useState(false);
  const [editId, setEditId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [d, m, y] = date.split("-").map((item) => parseInt(item));
  const [currentSelect, setCurrentSelect] = useState("on_going_goals");

  const today = new Date(y, m - 1, d).toLocaleDateString();

  const current_selection = new Date(y, m - 1, d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const current_select_weekday = new Date(y, m - 1, d).toLocaleDateString(
    "en-IN",
    {
      weekday: "long",
    }
  );

  const fetchTodayTask = () => {
    let tempData = dailyTask.filter(
      (item) => new Date(item.date).toLocaleDateString() == today
    );

    setTasks(tempData);
  };

  useEffect(() => {
    fetchTodayTask();
  }, [dailyTask]);

  return (
    <div className="h-[92vh] px-4 overflow-y-auto ">
      <div className="p-2">
        <h2 className="text-3xl">Add Event</h2>
        <p className="text-lg mt-2">
          {" "}
          {current_selection} - {current_select_weekday}
        </p>
        <hr className="mt-4 text-slate-600" />
      </div>

      {/* select section  */}

      <select
        className="text-2xl  w-full mb-4"
        onChange={(e) => setCurrentSelect(e.target.value)}
      >
        <option value="on_going_goals">Ongoing goals</option>
        <option value="compleated_goals">Compleated Goals</option>
      </select>

      {/* add or edit section  */}

      {showContainer && (
        <div className="fixed p-4 top-0 left-0 h-[92vh] bg-white/80 flex items-center justify-center w-full z-100">
          <AddorEditDailyTask
            setShowContainer={setShowContainer}
            editId={editId}
          />
        </div>
      )}

      <img
        src={assets.add}
        onClick={() => setShowContainer(!showContainer)}
        alt=""
        className="w-14 fixed bottom-24 right-3 bg-white rounded-full"
      />

      {/* on going tasks  */}

      {currentSelect === "on_going_goals" && (
        <div className=" flex flex-col gap-4">
          {tasks.map(
            (item) =>
              item.compleated === false && (
                <DailyTaskDeleteContainer
                  key={item.id}
                  item={item}
                  setShowContainer={setShowContainer}
                  setEditId={setEditId}
                />
              )
          )}
        </div>
      )}
      {/* compleated tasks */}

      {currentSelect === "compleated_goals" && (
        <div className=" flex flex-col gap-4">
          {tasks.map(
            (item) =>
              item.compleated === true && (
                <DailTaskCompleatedContainer
                  key={item.id}
                  item={item}
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default DailyTaskManager;

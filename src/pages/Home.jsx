import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import TaskContext from "../context/TaskContext";
import {
  DailTaskCompleatedContainer,
  DailyTaskContainer,
} from "../components/TaskContainers";
import AddorEditDailyTask from "../components/AddorEditDailyTask";

const Home = () => {
  const { dailyTask } = useContext(TaskContext);
  const [localTask, setLocalTask] = useState(null);
  const [currentSelect, setCurrentSelect] = useState("on_going_goals");
  const [showContainer, setShowContainer] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchDailyTask = () => {
    let today = new Date().setHours(0, 0, 0, 0);
    let temp = dailyTask.filter(
      (item) => new Date(item.date).setHours(0, 0, 0, 0) === today
    );

    setLocalTask(temp || []);
  };

  useEffect(() => {
    fetchDailyTask();
  }, [dailyTask]);

  if (localTask === null) {
    return (
      <div className="h-[92vh] px-4 overflow-y-auto">
        <Title heading={"Daily Events"} />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-[92vh] px-4 overflow-y-auto">
      <Title heading={"Daily Events"} />

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
      

      {/* on going tasks  */}

      {currentSelect === "on_going_goals" && (
        <div className="flex flex-col gap-4 ">
          {localTask.map(
            (item) =>
              item.compleated === false && (
                <DailyTaskContainer item={item} key={item.id} setShowContainer={setShowContainer} setEditId={setEditId} />
              )
          )}
        </div>
      )}

      {/* compleated tasks  */}
      {currentSelect === "compleated_goals" && (
        <div className="flex flex-col gap-4 ">
          {localTask.map(
            (item) =>
              item.compleated === true && (
                <DailTaskCompleatedContainer item={item} key={item.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

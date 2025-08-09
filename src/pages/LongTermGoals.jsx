import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import assets from "../assets/assets";
import TaskContext from "../context/TaskContext";
import EditLongTermGoals from "../components/EditLongTermGoals";
import {
  LongTermGoalCompleateContainer,
  LongTermGoalContainer,
  LongTermGoalIncompleateContainer,
} from "../components/TaskContainers";

const LongTermGoals = () => {
  const { goals } = useContext(TaskContext);
  const [localGoals, setLocalGoals] = useState([])
  const [showContainer, setShowContainer] = useState(false);
  const [editId, setEditId] = useState(null);
  const [currentSelect, setCurrentSelect] = useState("on_going_goals");

  useEffect(() => {
    setLocalGoals(goals || [])
}, [goals]);

  return (
    <div className="h-[92vh] px-4 overflow-y-auto">
      <Title heading={"Long-term Goals"} />

      <select
        className="text-2xl  w-full "
        onChange={(e) => setCurrentSelect(e.target.value)}
      >
        <option value="on_going_goals">Ongoing goals</option>
        <option value="compleated_goals">Compleated Goals</option>
        <option value="incompleated_goals">Incompleated Goals</option>
      </select>


      {/* on going goals  */}
      {currentSelect === "on_going_goals" && (
        <div className="flex flex-col gap-2 mt-4">
          {localGoals.map(
            item =>
              item.compleated === false &&
              new Date().setHours(0, 0, 0, 0) <=
                new Date(item.end_date).setHours(0, 0, 0, 0) && (
                <LongTermGoalContainer
                  key={item.id}
                  data={item}
                  setEditId={setEditId}
                  setShowContainer={setShowContainer}
                />
              )
          )}
        </div>
      )}

      {/* compleated goals  */}
      {currentSelect === "compleated_goals" && (
        <div className="flex flex-col gap-2 mt-4">
          {localGoals.map(
            item=>
              item.compleated === true && (
                <LongTermGoalCompleateContainer key={item.id} data={item}/>
              )
          )}
        </div>
      )}

      {/* incompleated goals  */}
{
  currentSelect === "incompleated_goals" &&

      <div className="flex flex-col gap-2 mt-4">
        {localGoals.map(
          item =>
            item.compleated === false &&
            new Date().setHours(0, 0, 0, 0) >
              new Date(item.end_date).setHours(0, 0, 0, 0) && (
              <LongTermGoalIncompleateContainer
                key={item.id}
                data={item}
                setEditId={setEditId}
                setShowContainer={setShowContainer}
              />
            )
        )}
      </div>
}
      {showContainer && (
        <div className="fixed top-0 left-0 bg-white/60 min-h-screen w-full flex items-center justify-center px-4">
          <EditLongTermGoals
            id={editId}
            setShowContainer={(flag) => {
              setShowContainer(flag);
              if (!flag) setEditId(null);
            }}
          />
        </div>
      )}

      <img
        src={assets.add2}
        alt="add"
        className="w-14 fixed bottom-24 right-3 bg-white rounded-full cursor-pointer"
        onClick={() => {
          setEditId(null);
          setShowContainer(true);
        }}
      />
    </div>
  );
};

export default LongTermGoals;

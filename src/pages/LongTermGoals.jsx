import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import assets from "../assets/assets";
import TaskContext from "../context/TaskContext";
import EditLongTermGoals from "../components/EditLongTermGoals";

const LongTermGoals = () => {
  const { goals, setGoals } = useContext(TaskContext); 
  const [localGoals, setLocalGoals] = useState([]);
  const [showContainer, setShowContainer] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    setLocalGoals(goals || []);
  }, [goals]);

  const completeTask = (id) => {
    const updated = goals.map((item) =>
      item.id === id ? { ...item, compleated: true } : item
    );
    setGoals(updated);
  };

  return (
    <div className="h-[92vh] px-4 overflow-y-auto">
      <Title heading={"Long-term Goals"} />

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
        className="w-16 fixed bottom-24 right-3 bg-white rounded-full cursor-pointer"
        onClick={() => {
          setEditId(null);
          setShowContainer(true);
        }}
      />

      <div className="flex flex-col gap-4 my-6 ">
        {localGoals.map((item) =>
          item.compleated === false ? (
            <div key={item.id} className="rounded border border-gray-500">
              <div className="flex items-center justify-between bg-amber-100 p-3 rounded-t">
                <div>
                  <p className="text-xl">{item.task}</p>
                  <p>
                    Duration : {new Date(item.from).toLocaleDateString()} -{" "}
                    {new Date(item.end).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <img
                    onClick={() => {
                      setEditId(item.id);
                      setShowContainer(true);
                    }}
                    src={assets.edit}
                    alt="edit"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <button
                onClick={() => completeTask(item.id)}
                className="w-full bg-yellow-600 text-white py-2 rounded-b"
              >
                Completed
              </button>
            </div>
          ) : null
        )}
      </div>

      <h1 className="text-2xl ">Completed Goals</h1>
      <div className="flex flex-col gap-4 my-6">
        {localGoals
          .filter((g) => g.compleated)
          .map((item) => (
            <div key={item.id} className="bg-green-200 border-green-600 rounded flex items-center justify-between border px-3 py-6">
              <div className="w-[80%]">
                <p className="text-xl font-medium">{item.task}</p>
                <p>
                  Duration : {new Date(item.from).toLocaleDateString()} -{" "}
                  {new Date(item.end).toLocaleDateString()}
                </p>
              </div>
              <div className="w-[20%] flex justify-end">
                <img src={assets.tick} className="w-10" alt="tick" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LongTermGoals;

import React, { useContext, useState } from "react";
import Title from "../components/Title";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const DailyTask = () => {
  const date  = new Date()
  const navigate = useNavigate();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarCells = [];
  for (let i = 0; i < firstDay; i++) {
    calendarCells.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarCells.push(day);
  }

  return (
    <div className="min-h-[92vh] px-4">
      <Title heading={"Daily Event Manager"} />
      {/* calander  */}
      <div className="border bg-stone-300 ">
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <select
              className="text-2xl appearance-none"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              <option className="text-sm" value="0">
                January
              </option>
              <option className="text-sm" value="1">
                February
              </option>
              <option className="text-sm" value="2">
                March
              </option>
              <option className="text-sm" value="3">
                April
              </option>
              <option className="text-sm" value="4">
                May
              </option>
              <option className="text-sm" value="5">
                June
              </option>
              <option className="text-sm" value="6">
                July
              </option>
              <option className="text-sm" value="7">
                August
              </option>
              <option className="text-sm" value="8">
                September
              </option>
              <option className="text-sm" value="9">
                October
              </option>
              <option className="text-sm" value="10">
                November
              </option>
              <option className="text-sm" value="11">
                December
              </option>
            </select>
            <select
              className="text-2xl appearance-none"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              {Array.from({ length: 5 }, (_, i) => {
                const y = 2025 + i;
                return (
                  <option className="text-sm" key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
          </div>
          <hr />
        </div>
        <div className="grid grid-cols-7 text-center ">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className=" py-1 text-xl mb-2">
              {d}
            </div>
          ))}
          {calendarCells.map((day, index) => (
            <div
              key={index}
              className="border border-black h-12 flex items-center justify-center "
               onClick={() =>
                day && navigate(`/daily-task-manager/${day}-${month + 1}-${year}`)
              }
            >
              {day ? day : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DailyTask;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DailyTask from "./pages/DailyTask";
import LongTermGoals from "./pages/LongTermGoals";
import Profile from "./pages/Profile";
import DailyTaskManager from "./pages/DailyTaskManager";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Start from "./pages/Start";

const App = () => {
  return (
    <div className="outfit">
      <Routes>
        <Route path="/Event-Manager" element={<Start />}>
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="daily-task" element={<DailyTask />} />
            <Route path="long-term-goals" element={<LongTermGoals />} />
            <Route path="user-profile" element={<Profile />} />
            <Route path="daily-task-manager/:date" element={<DailyTaskManager />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

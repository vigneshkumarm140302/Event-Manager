import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DailyTask from "./pages/DailyTask";
import LongTermGoals from "./pages/LongTermGoals";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import DailyTaskManager from "./pages/DailyTaskManager";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <div className="outfit min-h-screen flex flex-col-reverse">
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/daily-task" element={<DailyTask />} />
          <Route path="/long-term-goles" element={<LongTermGoals />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route
            path="/daily-task-manager/:date"
            element={<DailyTaskManager />}
          />
        </Route>
        <Route path="/create-account" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

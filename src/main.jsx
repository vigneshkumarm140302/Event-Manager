import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TaskContext, { TaskProvider } from "./context/TaskContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <TaskProvider>
        
          <App />
      </TaskProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

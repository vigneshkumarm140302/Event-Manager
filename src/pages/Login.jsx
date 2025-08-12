import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import assets from "../assets/assets";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { backendUrl, navigate, api } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/token/`, {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.access}`;
      }

      navigate("/Event-Manager");
    } catch (error) {
      alert("Invalid username or password");
      console.log(error.message);
    }
  };

  return (
    <div className="h-[92vh] flex items-center p-4  justify-center">
      <form
        onSubmit={(e) => handleLogin(e)}
        className="bg-gray-300/70 flex  py-12 p-4 rounded flex-col gap-4"
      >
        <h1 className=" text-xl text-center mb-4">Login Page</h1>
        <input
          className="bg-white/50 border border-gray-500 rounded-sm  pl-3 py-2"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your Email or Mobile number"
          required
        />
        <div className=" relative">
          <input
            className="bg-white/50 w-full border border-gray-500 rounded-sm  pl-3 py-2"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <img
            src={showPassword ? assets.eyeopened : assets.eyeclosed}
            onClick={() => setShowPassword(!showPassword)}
            alt=""
            className="absolute top-[25%] right-4"
          />
        </div>

        <button className="w-full bg-blue-500 text-white rounded-sm  pl-3 py-2">
          Login
        </button>
        <p
          onClick={() => navigate("/Event-Manager/create-account")}
          className="text-gray-800"
        >
          If you already don't have an account ? click here to{" "}
          <span className="text-blue-500">sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

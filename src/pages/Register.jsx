import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import assets from "../assets/assets";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { backendUrl, setAccessToken, setRefreshToken, navigate, setUserProfileData} =
    useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("The Password was not match");
      return null;
    }
    try {
      const response = await axios.post(`${backendUrl}/api/user-register`, {
        username: username,
        password: password,
        email: email,
      });
      if (response.status === 201) {
        setAccessToken(response.data.access);
        setRefreshToken(response.data.refersh);
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        setUserProfileData(response.data.user)
        navigate("/Event-Manager");
      }else{
        console.log(response);
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-[92vh] flex items-center p-4  justify-center">
      <form
        onSubmit={(e) => handleSignUp(e)}
        className="bg-gray-300/70 flex  py-12 p-4 rounded flex-col gap-4"
      >
        <h1 className=" text-xl text-center mb-4"> Create Account</h1>

        <input
          className="bg-white/50 border border-gray-500 rounded-sm  pl-3 py-2"
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your Name"
        />
        <input
          className="bg-white/50 border border-gray-500 rounded-sm  pl-3 py-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
       <div className=" relative">
          <input
            className="bg-white/50 w-full border border-gray-500 rounded-sm  pl-3 py-2"
            type={showPassword1 ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <img
            src={showPassword1 ? assets.eyeopened : assets.eyeclosed}
            onClick={() => setShowPassword1(!showPassword1)}
            alt=""
            className="absolute top-[25%] right-4"
          />
        </div>
       <div className=" relative">
          <input
            className="bg-white/50 w-full border border-gray-500 rounded-sm  pl-3 py-2"
            type={showPassword2 ? "text" : "password"}
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <img
            src={showPassword2 ? assets.eyeopened : assets.eyeclosed}
            onClick={() => setShowPassword2(!showPassword2)}
            alt=""
            className="absolute top-[25%] right-4"
          />
        </div>

        <button className="w-full bg-blue-500 text-white rounded-sm  pl-3 py-2">
          Sign Up
        </button>
        <p onClick={() => navigate('/login')} className="text-gray-800">
          If you already have an account ? click here to{" "}
          <span className="text-blue-500">sign in</span>
        </p>
      </form>
    </div>
  );
};

export default Register;

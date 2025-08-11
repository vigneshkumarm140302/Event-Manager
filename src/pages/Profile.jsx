import React, { useContext } from "react";
import assets from "../assets/assets";
import ToggleSwitch from "../components/ToggleSwitch";
import AuthContext from "../context/AuthContext";

const Profile = () => {
  const { userProfileData, Logout } = useContext(AuthContext);

  if (!userProfileData) {
    return (
      <div className="h-[92vh] w-full flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="min-h-[92vh] p-4">
      <img src={assets.account} className="w-32 mx-auto" alt="" />
      <h1 className="text-xl text-center mt-2 font-medium">
        {userProfileData.username}{" "}
      </h1>
      <div className="grid grid-cols-[1fr_2fr] gap-2 mt-8">
        <p>Phone :</p>
        <p>{userProfileData.phone_number}</p>
        <p>Email :</p>
        <p>{userProfileData.email}</p>
        <p>Notification :</p>
        <ToggleSwitch />
        <button
          className="bg-red-500 text-white py-1 px-3 rounded mt-2"
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

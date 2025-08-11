import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import ToggleSwitch from "../components/ToggleSwitch";
import AuthContext from "../context/AuthContext";
import LoadingSnippet from "../components/LoadingSnippet";

const Profile = () => {
  const { userProfileData, api, Logout } = useContext(AuthContext);

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null); 
  const [showProfilePicture, setShowProfilePicture] = useState(null); 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [editMode, setEditMode] = useState(false);

  const fetchUserData = () => {
    if (!userProfileData) return;
    setUserName(userProfileData.username || "");
    setEmail(userProfileData.email || "");
    setPhoneNumber(userProfileData.phone_number || "");

    if (userProfileData.profile_pic) {
      setShowProfilePicture(userProfileData.profile_pic);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("phone_number", phoneNumber);

    if (profilePicture) {
      formData.append("profile_pic", profilePicture);
    }

    try {
      const response = await api.patch(
        `api/user-update`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Profile updated:", response.data);

      if (response.data.profile_pic) {
        setShowProfilePicture(response.data.profile_pic);
      }

    } catch (error) {
      console.error("Update error:", error);
    }

    setEditMode(false);
  };

  useEffect(() => {
    fetchUserData();
  }, [userProfileData]);

  if (!userProfileData || Object.keys(userProfileData).length === 0) {
    return <LoadingSnippet />;
  }

  return (
    <div className="h-[92vh] overflow-y-scroll w-full p-4 relative">
      <form>
        {editMode ? (
          <button
            onClick={handleEdit}
            type="button"
            className="border py-1 px-6 absolute top-2 right-2 rounded bg-black text-white"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setEditMode(true)}
            className="border py-1 px-6 absolute top-2 right-2 rounded bg-black text-white"
          >
            Edit
          </button>
        )}

        <div className="flex flex-col items-center mb-4">
          {editMode ? (
            <div className="flex flex-col items-center justify-center">
          
              <label htmlFor="profile-upload" className="cursor-pointer">
                <img
                  src={showProfilePicture || assets.account}
                  className="w-24 h-24 rounded-full object-cover border border-gray-400"
                  alt="Profile"
                />
              </label>

              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setProfilePicture(file); 
                    setShowProfilePicture(URL.createObjectURL(file)); 
                  }
                }}
              />
            </div>
          ) : (
            <img
              src={showProfilePicture || assets.account}
              className="w-24 h-24 rounded-full object-cover border border-gray-400"
              alt="Profile"
            />
          )}
        </div>

        <h1 className="text-xl text-center mb-4">{username}</h1>

        <div className="grid grid-cols-[1fr_2fr] gap-y-4 mb-4">
          <p className="font-semibold">Email:</p>
          {editMode ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            <p>{email}</p>
          )}

          <p className="font-semibold">Phone:</p>
          {editMode ? (
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border rounded px-2 py-1"
            />
          ) : (
            <p>{phoneNumber}</p>
          )}

          <p className="font-semibold">Notification:</p>
          <ToggleSwitch />
        </div>
      </form>

      <button
        className="bg-red-500 text-white py-1 px-3 rounded mt-2"
        onClick={Logout}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

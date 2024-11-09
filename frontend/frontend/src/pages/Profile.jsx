import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../assets/components/nav";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileHeader from "../assets/components/profile/ProfileHeader";
import ProfileDetails from "../assets/components/profile/ProfileDetails";
import UserProblems from "../assets/components/profile/UserProblems";
import EditButton from "../assets/components/profile/EditButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userProblems, setUserProblems] = useState([]);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    nickname: user?.nickname || "",
    email: user?.email || "",
    emailVerified: user?.email_verified || false,
    school: "",
    grade: "",
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="profile-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] pb-4 relative">
      <Nav />
      <div className="flex justify-center">
        <div className="bg-[#B5D4F4] min-h-[50vh] w-[40vw] p-8 rounded-lg shadow-md text-black mt-0 mb-8 relative">
          <ProfileHeader user={user} isAuthenticated={isAuthenticated} />
          {isAuthenticated ? (
            <div className="flex flex-col items-center">
              <h1 className="text-center text-2xl font-bold mt-8 mb-6">
                {profileData.name}
              </h1>
              <ProfileDetails
                profileData={profileData}
                isEditing={isEditing}
                handleChange={handleChange}
              />
              <div className="flex justify-between w-full mt-3">
                <button
                  onClick={() => navigate("/personal")}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 rounded h-10"
                >
                  Problemele tale
                </button>
                <button
                  onClick={handleEdit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 rounded h-10 "
                >
                  Editează profilul
                </button>
              </div>
              <UserProblems userProblems={userProblems} />
            </div>
          ) : (
            <div>
              <h1 className="text-center text-2xl font-bold mt-6 mb-6">
                Profil
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
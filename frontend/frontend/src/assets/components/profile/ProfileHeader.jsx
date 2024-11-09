import React from "react";
import profil from "../../../assets/images/profile-images/profile-image.svg";
import wave from "../../../assets/images/profile-images/profile-wave.svg";

const ProfileHeader = ({ user, isAuthenticated }) => {
  return (
    <div className="relative flex justify-center items-center mt-4">
      <img
        src={wave}
        alt="Wave"
        className="absolute h-[140px] w-auto transform -translate-y-2 flip-animation"
      />
      {isAuthenticated ? (
        <img
          src={user.picture}
          alt={user.name}
          className="h-[90px] rounded-full mb-0 z-10 flip-animation"
        />
      ) : (
        <img
          src={profil}
          alt="Profil"
          className="h-[120px] rounded-full mb-0 z-10 flip-animation"
        />
      )}
    </div>
  );
};

export default ProfileHeader;

import React from "react";

const ProfileDetails = ({ profileData, isEditing, handleChange }) => {
  return (
    <ul className="text-left w-full mt-4 space-y-2">
      <li>
        <strong>Nume: </strong>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
        ) : (
          profileData.name
        )}
      </li>
      <li>
        <strong>Poreclă: </strong>
        {isEditing ? (
          <input
            type="text"
            name="nickname"
            value={profileData.nickname}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
        ) : (
          profileData.nickname
        )}
      </li>
      <li>
        <strong>Email:</strong> {profileData.email}
      </li>
      <li>
        <strong>Email verificat:</strong> {profileData.emailVerified ? "Da" : "Nu"}
      </li>
      <li>
        <strong>Școală:</strong>
        {isEditing ? (
          <input
            type="text"
            name="school"
            value={profileData.school}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
        ) : (
          profileData.school
        )}
      </li>
      <li>
        <strong>Clasă:</strong>
        {isEditing ? (
          <input
            type="text"
            name="grade"
            value={profileData.grade}
            onChange={handleChange}
            className="border p-1 rounded w-full"
          />
        ) : (
          profileData.grade
        )}
      </li>
    </ul>
  );
};

export default ProfileDetails;

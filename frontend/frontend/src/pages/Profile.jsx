import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from "../assets/components/nav";
import profil from "../assets/images/profile-images/profile-image.svg";
import { useAuth0 } from '@auth0/auth0-react';
import wave from "../assets/images/profile-images/profile-wave.svg";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [showProblems, setShowProblems] = useState(false);
    const [userProblems, setUserProblems] = useState([]);
    const [profileData, setProfileData] = useState({
        name: user?.name || '',
        givenName: user?.given_name || '',
        nickname: user?.nickname || '',
        email: user?.email || '',
        school: '',
        grade: '',
    });

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    return (
        <div className="profile-page min-h-screen flex flex-col items-center bg-gradient-to-br from-[#3ba4cb] to-[#2c3eb4] pb-4 relative">
            <Nav />
            <div className="flex justify-center">
                <div className="bg-[#B5D4F4] min-h-[70vh] w-[40vw] p-8 rounded-lg shadow-md text-black mt-0 mb-8 relative">
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

                    {isAuthenticated ? (
                        <div className="flex flex-col items-center">
                            <h1 className="text-center text-2xl font-bold mt-8 mb-6">{profileData.name}</h1>
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
                                        `${profileData.name}`
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
                                    <strong>Email verificat:</strong> {user?.email_verified ? "Da" : "Nu"}
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
                        </div>
                    ) : (
                        <div>
                            <h1 className="text-center text-2xl font-bold mt-6 mb-6">Profil</h1>
                            <div className="flex flex-col items-left">
                                <div className="space-y-3 mt-6">
                                    <div className="font-medium text-black">Nume: </div>
                                    <div className="font-medium text-black">Școală: </div>
                                    <div className="font-medium text-black">Clasă: </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <button
                        onClick={() => navigate('/personal')}
                        className="bg-blue-400 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded mt-3"
                    >
                        Lista problemelor generate de tine
                    </button>

                    {showProblems && (
                        <div className="mt-4">
                            {userProblems.length > 0 ? (
                                <ul className="space-y-3">
                                    {userProblems.map((item, index) => (
                                        <li key={index} className="bg-white text-black p-4 rounded-md shadow-md">
                                            {item.problem}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center">Nu ai generat nicio problemă momentan.</p>
                            )}
                        </div>
                    )}
                    <div className="mt-6 flex justify-center space-x-4">
                        {isEditing ? (
                            <button
                                onClick={handleSave}
                                className="bg-[#e6b71dd2] text-black hover:bg-[#E6B81D] px-4 py-2 rounded"
                            >
                                Salvează
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-[#e6b71dd2] text-black hover:bg-[#E6B81D] px-4 py-2 rounded"
                            >
                                Editează profilul
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

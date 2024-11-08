import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";
import LogoutButton from "./logoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(isAuthenticated, user);
  return (
    <div className="w-[90%] mx-auto flex items-center justify-between p-0 lg:flex-row text-[#E8F2F4] text-sm">
      <div className="mt-[12px]">
        <img src={logo} alt="Logo" className="h-28 w-auto" />
      </div>
      <div className="text-sm flex mr-6 space-x-6 mt-[-20px] font-medium">
        <Link to="/" className="hover-underline">
          ACASĂ
        </Link>
        <Link to="/problems" className="hover-underline">
          PROBLEME
        </Link>
        <Link to="/professors" className="hover-underline">
          PROFESORI
        </Link>
        <Link to="/profile" className="hover-underline">
          PROFIL
        </Link>
      </div>
      <LoginButton />
      <LogoutButton />
    </div>
  );
};

export default Nav;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CircleButton from "./circleButton";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <CircleButton 
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      text="LOG OUT"
    />
  );
};

export default LogoutButton;

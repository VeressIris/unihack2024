
import { useAuth0 } from "@auth0/auth0-react";
import CircleButton from "./circleButton"; 

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated &&
    <CircleButton onClick={() => logout({ returnTo: window.location.origin })} text="LOG OUT" />
  );
};

export default LogoutButton;

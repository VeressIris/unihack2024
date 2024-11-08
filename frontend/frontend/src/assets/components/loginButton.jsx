import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CircleButton from "./circleButton"; 

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <CircleButton onClick={() => loginWithRedirect()} text="LOG IN" />;
};

export default LoginButton;

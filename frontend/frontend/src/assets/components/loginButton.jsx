
import { useAuth0 } from "@auth0/auth0-react";
import CircleButton from "./circleButton"; 

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated &&
    <CircleButton onClick={() => loginWithRedirect()} text="LOG IN" />
  )
};

export default LoginButton;


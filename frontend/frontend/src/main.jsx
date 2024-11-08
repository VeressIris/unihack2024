import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="midnightdovedev.eu.auth0.com"
    clientId="GPIp761w40RvwHD3xpXcXlRgdBBsy1lQ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

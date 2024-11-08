// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Select from "./pages/Select";
import Professors from "./pages/Professors";
import Profile from "./pages/Profile";
import Loading from "./pages/Loading";
import Subject from "./pages/Subject";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [canAccessSelect, setCanAccessSelect] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isAuthenticated={isAuthenticated}
              grantAccessToSelect={() => setCanAccessSelect(true)}
            />
          }
        />
        <Route path="/problems" element={<Problems />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/select" element={<Select />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

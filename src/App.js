import "./App.css";
import Dashboard from "./pages/Dashboard";
import AthleticBld from "./pages/AthleticBld";
import StrengthBld from "./pages/StrengthBld";
import Nutrition from "./pages/Nutrition";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SignOut from "./pages/SignOut";
import Calendar from "./pages/Calendar";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GoogleAuth from "./pages/GoogleAuth";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/googleauth" element={<GoogleAuth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/athleticbld" element={<AthleticBld />} />
          <Route path="/strengthbld" element={<StrengthBld />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;

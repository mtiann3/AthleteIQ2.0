import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import AthleticBld from "./pages/AthleticBld";
import StrengthBld from "./pages/StrengthBld";
import Nutrition from "./pages/Nutrition";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SignOut from "./pages/SignOut";
import Calendar from "./pages/Calendar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./pages/GoogleAuth";
import GoogleAuth from "./pages/GoogleAuth";
import Nav from "./components/Nav";

// Define your components: Home, Example, Dashboard, etc.

const App = () => {
  console.log("app")
  //displaying nav when successfully signed in. 
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true' || false
  );

  const signIn = async () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContextProvider>
      {isAuthenticated ? (
        <>
          <Nav/>
        </>
      ) : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/googleauth" element={<GoogleAuth signIn = {signIn}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/athleticbld" element={<AthleticBld />} />
        <Route path="/strengthbld" element={<StrengthBld />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AthleticBld from "./pages/AthleticBld";
import StrengthBld from "./pages/StrengthBld";
import Nutrition from "./pages/Nutrition"
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SignOut from "./pages/SignOut";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <>
      <Example />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/athleticbld" element={<AthleticBld />} />
        <Route path="/strengthbld" element={<StrengthBld />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signout" element={<SignOut />} />


      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Dashboard from "./pages/Dashboard";
import AthleticBld from "./pages/AthleticBld";
import StrengthBld from "./pages/StrengthBld";
import Nutrition from "./pages/Nutrition";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SignOut from "./pages/SignOut";
import Protected from "./components/Protected";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GoogleAuth from "./pages/GoogleAuth";
import { AuthContextProvider } from "./context/AuthContext";
import WorkoutPlan from "./pages/WorkoutPlan";
import ExerciseLog from "./pages/ExerciseLog";
import Homework from "./pages/Homework";
import Chores from "./pages/Chores";
import Water from "./pages/Water";
import JournalEntry from "./pages/JournalEntry";
import ReadingLog from "./pages/ReadingLog";
import StudyLog from "./pages/StudyLog";
import ShareData from "./pages/ShareData";
import SleepLog from "./pages/SleepLog";
import WorkSchedule from "./pages/WorkSchedule";
import Calendar from "./pages/Calendar";
import SchoolSchedule from "./pages/SchoolSchedule";

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
          <Route path="/workoutplan" element={<WorkoutPlan />} />
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
          <Route path="/exerciselog" element={<ExerciseLog />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="/chores" element={<Chores />} />
          <Route path="/water" element={<Water />} />
          <Route path="/journal entry" element={<JournalEntry />} />
          <Route path="/reading" element={<ReadingLog />} />
          <Route path="/study" element={<StudyLog />} />
          <Route path="/sharedata" element={<ShareData />} />
          <Route path="/sleep" element={<SleepLog />} />
          <Route path="/job" element={<WorkSchedule />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/school" element={<SchoolSchedule />} />

        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;

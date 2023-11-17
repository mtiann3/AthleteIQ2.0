import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();


  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

      if (user && user.uid) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // background div
    <div className=" flex flex-col items-center w-auto h-screen p-10  m-auto bg-blue-200">
      {/* heading/slogan */}
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#b52e2b] md:text-5xl lg:text-6xl ">
        AthleteIQ
      </h1>
      {/* description */}
      <p className="p-10 text-2xl italic font-bold text-center leading-[3rem] text-[#e11624] ">
        For Students and Athletes, made by a student-athlete. Track your progress and transform your
        physical, and mental health along with your academics with your own personalized self improvement app. Reach your fitness goals
        efficiently with progress tracking. Start your transformation journey
        now!
      </p>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Home;

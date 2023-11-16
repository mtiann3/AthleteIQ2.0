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
    <div className=" flex flex-col items-center w-auto h-screen p-10  m-auto bg-[#ffffff]">
      {/* heading/slogan */}
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-[#b52e2b] md:text-5xl lg:text-6xl ">
        "Track Your Progress, Transform Your Body"
      </h1>
      {/* description */}
      <p className="p-10 text-2xl italic font-bold text-center leading-[3rem] text-[#e11624] ">
        For Athletes, made by an Athlete. Track your progress and transform your
        body with your own personalized fitness app. Input your stats and get a
        custom workout plan made just for you. Reach your fitness goals
        efficiently with progress tracking. Start your transformation journey
        now!
      </p>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
};

export default Home;

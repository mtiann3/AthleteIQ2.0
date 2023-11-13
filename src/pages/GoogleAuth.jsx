import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [googleButtonClicked, setGoogleButtonClicked] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setGoogleButtonClicked(true);
    } catch (error) {
      console.log(error);
    }
  };
useEffect(() => {
  if (user && user.uid) {
    navigate('/dashboard');
  }
}, [navigate, googleButtonClicked, user]);


  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">Sign in</h1>
      <div className="max-w-[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default GoogleAuth;
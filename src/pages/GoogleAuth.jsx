import React, { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { signInWithGoogle } from '../context/SignInGoogle'; // Import the signInWithGoogle function from signin.js
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = ({signIn}) => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      setIsSigningIn(false);
      
    }
  };

  useEffect(() => {
    if (user && user.uid && isSigningIn) {
      navigate('/dashboard');
      signIn();
    }
  }, [user, navigate, isSigningIn, signIn]);

  return (
    <div className='w-auto h-screen p-10  m-auto bg-[#3f4546]'>
      <h1 className='text-center text-xl font-bold py-8'>Please sign in with Google to continue.</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default GoogleAuth;

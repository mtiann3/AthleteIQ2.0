// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOE9X-s0ZBJOO36YGAQAy3CuRPOkPRgD0",
    authDomain: "athleteiq-v2.firebaseapp.com",
    projectId: "athleteiq-v2",
    storageBucket: "athleteiq-v2.appspot.com",
    messagingSenderId: "464051972155",
    appId: "1:464051972155:web:ff17665e46f55c0937141e",
    measurementId: "G-KDJT2KKEX9"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);

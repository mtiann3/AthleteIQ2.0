import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  getDocs,
  query,
  where,
  setDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    console.log("read")
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      //add user to db
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      const arr = [];
      querySnapshot.forEach((doc) => {
        //goes through all of the registered accounts in db.
        //if account with email exists, do not add.
        arr.push(doc.data().email);
      });
      if (!arr.includes(currentUser.email)) {
        try {
          const docRef = await setDoc(doc(db, "users", currentUser.uid), {
            name: currentUser.displayName,
            email: currentUser.email,
            todos: [], // Initialize todos as an empty array
          });

          console.log("Document written with ID: ", docRef.id);
          console.log(currentUser.uid);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        console.log("User", currentUser);
      } else {
        console.log("User already exists");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Profile = () => {
  const { logOut, user } = UserAuth();
  const [userData, setUserData] = useState({
    gender: "Male",
    height: { feet: "", inches: "" },
    weight: "",
    age: "",
    activityLevel: "1",
    weightGoal: "Gain Slow",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          const userDataFromFirestore = docSnap.data().profile;
          
          // Check if 'height' property is present, if not, set default values
          if (!userDataFromFirestore.height) {
            userDataFromFirestore.height = { feet: "", inches: "" };
          }
  
          setUserData(userDataFromFirestore);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchData();
  }, [user.uid]);

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, {
        profile: userData
      });
      console.log((await getDoc(docRef)).data())
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div>
      <div className="h-full bg-blue-200">
        <div className="border-b-2 p-3 flex-col items-center block md:flex">
          <img
            id="showImage"
            className="items-center h-[160x] w-[160px] rounded-full border p-2 bg-black"
            src={user?.photoURL}
            alt=""
          />
          <h2 className="text-4xl p-4 font-extrabold text-black block">
            Current Info
          </h2>

          <div className="w-3/5 p-8 bg-white border-8">
            <div className="rounded shadow p-6">
              <div className="pb-6">
                <label
                  htmlFor="genderGoalChange"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Gender
                </label>
                <label
                  htmlFor="genderGoalChange"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="genderGoalChange"
                  className="border-2 border-gray-700 text-gray-700 text-sm block w-full p-2.5"
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Add similar blocks for other form elements (height, weight, age, activityLevel, weightGoal) */}
              <div className="pb-6">
                <label
                  htmlFor="heightFeet"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Height (Feet, Inches)
                </label>
                <div className="flex items-start">
                  <input
                    id="heightFeet"
                    className="border-2 border-gray-700 px-4 py-2 w-full mr-2"
                    type="text"
                    value={userData.height.feet}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        height: { ...userData.height, feet: e.target.value },
                      })
                    }
                  />
                  <input
                    id="heightInches"
                    className="border-2 border-gray-700 px-4 py-2 w-full ml-2"
                    type="text"
                    value={userData.height.inches}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        height: { ...userData.height, inches: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div className="pb-4">
                <label
                  htmlFor="weight"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Weight (Pounds)
                </label>
                <input
                  id="weight"
                  className="border-2 border-gray-700 rounded-r px-4 py-2 w-full"
                  type="text"
                  value={userData.weight}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      weight: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pb-4">
                <label
                  htmlFor="age"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Age (Years)
                </label>
                <input
                  id="age"
                  className="border-2 border-gray-700 rounded-r px-4 py-2 w-full"
                  type="text"
                  value={userData.age}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      age: e.target.value,
                    })
                  }
                />
              </div>
              <div className="pb-6">
                <label
                  htmlFor="activityLevelChange"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Activity Level
                </label>
                <label
                  htmlFor="activityLevelChange"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="activityLevelChange"
                  className="border-2 border-gray-700 text-gray-700 text-sm block w-full p-2.5"
                  value={userData.activityLevel}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      activityLevel: e.target.value,
                    })
                  }
                >
                  <option value="1">Sedentary: minimal or no exercise</option>
                  <option value="2">
                    Lightly active: exercise lightly one to three days a week
                  </option>
                  <option value="3">
                    Moderately active: exercise moderately three to five days a
                    week
                  </option>
                  <option value="4">
                    Very Active: engage in hard exercise six to seven days a
                    week
                  </option>
                  <option value="5">
                    Extra active: engage in very hard exercise six to seven days
                    a week
                  </option>
                </select>
              </div>
{/* WEIGHT GOAL BLOCK */}
              <div className="pb-6">
                <label
                  htmlFor="weightGoalChange"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Gain, Lose or Maintain Weight
                </label>
                <label
                  htmlFor="weightGoalChange"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="weightGoalChange"
                  className="border-2 border-gray-700 text-gray-700 text-sm block w-full p-2.5"
                  value={userData.weightGoal}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      weightGoal: e.target.value,
                    })
                  }
                >
                  <option value="Gain Slow">Gain Slow (+1lb/week)</option>
                  <option value="Gain Fast">Gain Fast (+2lbs/week)</option>
                  <option value="Lose Slow">Lose Slow (-1lb/week)</option>
                  <option value="Lose Fast">Lose Fast (+2lbs/week)</option>
                  <option value="Maintain">
                    Maintain (No change in weight)
                  </option>
                </select>
              </div>
{/* UPDATE DATA BLOCK */}
              <div className="pb-6">
                <button
                  onClick={handleUpdate}
                  className="bg-red-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center"
                >
                  Update
                </button>
              </div>
              <label className="text-gray-600">
                Your personal information and goals
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const { logOut, user } = UserAuth();
  const pfpUrl = user?.photoURL;
  return (
    <div>
      <div class="h-full bg-blue-200">
        <div class="border-b-2  p-3 flex-col items-center  block md:flex">
          <img
            id="showImage"
            class=" items-center h-[160x] w-[160px] rounded-full border p-2 bg-black"
            src={pfpUrl}
            alt=""
          />
          <h2 class="text-4xl p-4 font-extrabold text-black block">
            Current Info
          </h2>

          <div class="w-3/5   p-8 bg-white  border-8">
            <div class="rounded   shadow p-6">
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Gender
                </label>
                <label
                  for="weightChange"
                  class="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="genderGoalChange"
                  class=" border-2 border-gray-700 text-gray-700 text-sm  block w-full p-2.5  "
                  // onChange={handleGenderChange}
                >
                  <option selected value="Male">
                    Male
                  </option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Height
                </label>
                <div class="flex items-start">
                  <input
                    id="username"
                    class="border-2 border-gray-700 px-4 py-2 w-full mr-2"
                    type="text"
                    value="5ft"
                  />
                  <input
                    id="username"
                    class="border-2 border-gray-700 px-4 py-2 w-full ml-2"
                    type="text"
                    value="11 in"
                  />
                </div>
              </div>

              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Weight (Pounds)
                </label>
                <input
                  id="email"
                  class="border-2 border-gray-700  rounded-r px-4 py-2 w-full"
                  type="email"
                  value="200 Lbs"
                  // onChange={handleWeightChange}
                />
              </div>
              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Age (Years)
                </label>
                <input
                  id="email"
                  class="border-2 border-gray-700  rounded-r px-4 py-2 w-full"
                  type="email"
                  value="17 Yrs"
                  // onChange={handleAgeChange}
                />
              </div>
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Activity Level
                </label>
                <label
                  for="weightChange"
                  class="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="weightGoalChange"
                  class=" border-2 border-gray-700 text-gray-700 text-sm  block w-full p-2.5  "
                  // onChange={handleActivityLevelChange}
                >
                  <option value="1">Sedentary: minimal or no exercise</option>
                  <option value="2">
                    Lightly active: exercise lightly one to three days a week
                  </option>
                  <option value="3">
                    Moderately active: exercise moderately three to five days a
                    week
                  </option>
                  <option selected value="4">
                    Very Active: engage in hard exercise six to seven days a
                    week
                  </option>
                  <option value="5">
                    Extra active: engage in very hard exercise six to seven days
                    a week
                  </option>
                </select>
              </div>
              <div class="pb-6">
                <label
                  for="name"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Gain, Lose or Maintain Weight
                </label>
                <label
                  for="weightChange"
                  class="block  text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="weightGoalChange"
                  class=" border-2 border-gray-700 text-gray-700 text-sm  block w-full p-2.5  "
                  // onChange={handleWeightGoalChange}
                >
                  <option value="Gain Slow">Gain Slow (+1lb/week)</option>
                  <option value="Gain Fast">Gain Fast (+2lbs/week)</option>
                  <option value="Lose Slow">Lose Slow (-1lb/week)</option>
                  <option value="Lose Fast">Lose Fast (+2lbs/week)</option>
                  <option selected value="Maintain">
                    Maintain (No change in weight)
                  </option>
                </select>
              </div>

              <div class="pb-6">
                <button
                  // onClick={handleClick}
                  className="bg-red-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center"
                >
                  Update
                </button>
              </div>

              <label class="text-gray-600 ">
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

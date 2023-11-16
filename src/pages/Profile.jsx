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
          <h2 class="text-4xl p-4 font-extrabold text-black block">Current Info</h2>

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
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="genderGoalChange"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // onChange={handleGenderChange}
                >
                  <option selected>Select Gender</option>
                  <option value="Male">Male</option>
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
                <div class="flex items-start ">
                  <input
                    id="username"
                    class="border-4  border-gray-700  rounded-r px-4 py-2 w-full"
                    type="text"
                    placeHolder="Feet"
                    // onChange={handleHeightChangeFeet}
                  />
                  <input
                    id="username"
                    class="border-4  border-gray-700 rounded-r px-4 py-2 w-full"
                    type="text"
                    placeholder="Inches"
                    // onChange={handleHeightChangeInches}
                  />
                </div>
              </div>
              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Weight
                </label>
                <input
                  id="email"
                  class="border-4 border-gray-700  rounded-r px-4 py-2 w-full"
                  type="email"
                  placeholder="Pounds"
                  // onChange={handleWeightChange}
                />
              </div>
              <div class="pb-4">
                <label
                  for="about"
                  class="font-semibold text-gray-700 block pb-1"
                >
                  Age
                </label>
                <input
                  id="email"
                  class="border-4 border-gray-700  rounded-r px-4 py-2 w-full"
                  type="email"
                  placeholder="Years"
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
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="weightGoalChange"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // onChange={handleActivityLevelChange}
                >
                  <option selected>
                    Select the number of times you exercise per week
                  </option>
                  <option value="1">0-2</option>
                  <option value="2">3-4</option>
                  <option value="3">5-6</option>
                  <option value="4">7-8</option>
                  <option value="5">9-10</option>
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
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="weightGoalChange"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // onChange={handleWeightGoalChange}
                >
                  <option selected>Choose a goal</option>
                  <option value="Gain Slow">Gain Slow</option>
                  <option value="Gain Fast">Gain Fast</option>
                  <option value="Lose Slow">Lose Slow</option>
                  <option value="Lose Fast">Lose Fast</option>
                  <option value="Maintain">Maintain</option>
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

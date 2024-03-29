import React from "react";
import { UserAuth } from "../context/AuthContext";
import NutritionRunDown from "../components/NutritionRunDown";

const Nutrition = () => {
  const { logout, user } = UserAuth();

  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Nutrition
          </h1>
          <p>Here is today's nutrition rundown</p>
        </div>
      </header>
      <NutritionRunDown/>
    </div>
  );
};

export default Nutrition;

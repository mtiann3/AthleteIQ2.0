import React from "react";
import WeeklyCalendar from "../components/WeeklyCalendar";

const WorkoutPlan = () => {
  return (
    <div className="items-center">
      <header className="bg-blue-200 shadow w-full">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Weekly Workout Plan
          </h1>
        </div>
      </header>
      <p>
        Every sunday (rest day) be sure to update your upcoming weeks workout
        plan and adjust each exercise based on your progress.
      </p>

      <div className="">
        <WeeklyCalendar />
      </div>
      <div className="pb-6 flex flex-col   items-center">
        <button className="bg-red-900 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded items-center">
          Save
        </button>
      </div>
    </div>
  );
};

export default WorkoutPlan;

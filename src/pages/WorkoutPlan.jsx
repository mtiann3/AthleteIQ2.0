import React from "react";
import WeeklyCalendar from "../components/WeeklyCalendar";

const WorkoutPlan = () => {
  return (
    <div>
      <header className="bg-blue-200 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Weekly Workout Plan
          </h1>
        </div>
      </header>
      <div className="justify-center grid grid-cols-2 gap-2 p-5">
        <WeeklyCalendar day={"Sunday"} />
        <WeeklyCalendar day={"Monday"} />
        <WeeklyCalendar day={"Tuesday"} />
        <WeeklyCalendar day={"Wednesday"} />
        <WeeklyCalendar day={"Thursday"} />
        <WeeklyCalendar day={"Friday"} />
        <WeeklyCalendar day={"Saturday"} />
        <div class="pb-6">
          <button className="bg-red-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded items-center">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;

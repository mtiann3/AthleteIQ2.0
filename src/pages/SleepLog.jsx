import React, { useState } from "react";

const SleepTracker = () => {
  const [sleepData, setSleepData] = useState(Array(7).fill(null));
  const [goalMet, setGoalMet] = useState(Array(7).fill(false));

  const updateSleepData = (dayIndex, hoursSlept) => {
    const newSleepData = [...sleepData];
    newSleepData[dayIndex] = hoursSlept;
    setSleepData(newSleepData);

    const goal = calculateGoal();
    const isMet = Math.abs(hoursSlept - goal) <= 0.5;
    setGoalMet((prev) => {
      const newGoalMet = [...prev];
      newGoalMet[dayIndex] = isMet;
      return newGoalMet;
    });
  };

  const calculateGoal = () => {
    return 8; // Default goal for demonstration
  };

  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Sleep Log
          </h1>
        </div>
      </header>
      In this component, it will automatically calculate goal sleep based on the
      users profile section. For now it is defaulted to just 8. Each day, the
      user will input the amount of time they recently slept. From then, it will
      show a weekly calendar of the days that week. If the sleep count is within
      a half hour, the goal will be met, showing that day in green, If it is
      within an hour (not half hour), then it will be partially met, displaying
      yellow, Otherwise if it is beyond that, then it will be displayed in red,
      meaning not met. All of that arent entered will just be colored to default
      grey.
      <div className="flex flex-col">
        {sleepData.map((hoursSlept, index) => (
          <div
            key={index}
            className={`mb-4 p-4 border border-gray-300 ${
              goalMet[index]
                ? "bg-green-200"
                : Math.abs(hoursSlept - calculateGoal()) <= 1
                ? "bg-yellow-200"
                : "bg-red-200"
            }`}
          >
            <p>Day {index + 1}</p>
            <input
              type="number"
              placeholder="Hours slept"
              value={hoursSlept || ""}
              onChange={(e) =>
                updateSleepData(index, parseFloat(e.target.value))
              }
              className="mt-2 p-2 border border-gray-300 w-16" // Adjust the width as needed
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepTracker;

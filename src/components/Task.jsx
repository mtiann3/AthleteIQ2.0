// when you click on the complete button it will take you to the route of the taskname.

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Task = ({ taskName }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  const percentageCompleted = completed ? 100 : 0;

  const progressBarWidth = `w-${percentageCompleted}`;
  const taskNameLowercase = taskName.toLowerCase();

  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <p className="text-lg font-bold">{taskName}</p>
      </div>
      <div className="bg-gray-200 h-2 mt-2 rounded-full overflow-hidden">
        <div
          className={`bg-green-500 h-full transition-all duration-300 ${progressBarWidth} rounded-full`}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-md text-gray-500">{`${percentageCompleted}% completed`}</span>
        {!completed && (
          <Link
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            to={`/${taskNameLowercase}`}          >
            Complete
          </Link>
        )}
      </div>
    </div>
  );
};

export default Task;

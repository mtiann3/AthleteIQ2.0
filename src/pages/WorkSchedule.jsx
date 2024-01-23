import React, { useState } from "react";

const WorkSchedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [schedule, setSchedule] = useState({
    Sunday: { startTime: "", endTime: "", startPeriod: "AM", endPeriod: "AM" },
    Monday: { startTime: "", endTime: "", startPeriod: "AM", endPeriod: "AM" },
    Tuesday: { startTime: "", endTime: "", startPeriod: "AM", endPeriod: "AM" },
    Wednesday: {
      startTime: "",
      endTime: "",
      startPeriod: "AM",
      endPeriod: "AM",
    },
    Thursday: {
      startTime: "",
      endTime: "",
      startPeriod: "AM",
      endPeriod: "AM",
    },
    Friday: { startTime: "", endTime: "", startPeriod: "AM", endPeriod: "AM" },
    Saturday: {
      startTime: "",
      endTime: "",
      startPeriod: "AM",
      endPeriod: "AM",
    },
  });

  const handleInputChange = (day, field, value) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Weekly Work Schedule
          </h1>
        </div>
      </header>
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-md rounded-md">
        {daysOfWeek.map((day) => (
          <div key={day} className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              {day}
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Start Time"
                value={schedule[day].startTime}
                onChange={(e) =>
                  handleInputChange(day, "startTime", e.target.value)
                }
                className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <select
                value={schedule[day].startPeriod}
                onChange={(e) =>
                  handleInputChange(day, "startPeriod", e.target.value)
                }
                className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <div className="flex space-x-2 mt-2">
              <input
                type="text"
                placeholder="End Time"
                value={schedule[day].endTime}
                onChange={(e) =>
                  handleInputChange(day, "endTime", e.target.value)
                }
                className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <select
                value={schedule[day].endPeriod}
                onChange={(e) =>
                  handleInputChange(day, "endPeriod", e.target.value)
                }
                className="p-2 w-1/2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Save Schedule
        </button>
      </div>
    </div>
  );
};

export default WorkSchedule;

import React, { useState } from 'react';

const ScheduleComponent = () => {
  const [schedule, setSchedule] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });
  const [className, setClassName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedDay, setSelectedDay] = useState('Sunday');

  const addClass = () => {
    if (className && startTime && endTime) {
      setSchedule((prevSchedule) => {
        const updatedSchedule = { ...prevSchedule };
        updatedSchedule[selectedDay].push({ className, startTime, endTime });
        return updatedSchedule;
      });

      setClassName('');
      setStartTime('');
      setEndTime('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">School Schedule</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Day of the Week:</label>
        <select
          className="border p-2"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Class Name:</label>
        <input
          type="text"
          className="border p-2 w-full"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Start Time:</label>
        <input
          type="time"
          className="border p-2"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">End Time:</label>
        <input
          type="time"
          className="border p-2"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={addClass}
      >
        Add Class
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Weekly Schedule:</h3>
        {Object.entries(schedule).map(([day, classes]) => (
          <div key={day}>
            <h4 className="text-lg font-semibold mb-2">{day}</h4>
            <ul>
              {classes.map((item, index) => (
                <li key={index}>
                  {item.className} - {item.startTime} to {item.endTime}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleComponent;

// Calendar.js
import React, { useState } from "react";

const Calendar = ({ onDateSelection }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [tasks, setTasks] = useState([
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 6",
    "Task 7",
    "Task 8",
    "Task 9",
    "Task 10",
    "Task 11",
    "Task 12",
    "Task 13",
    "Task 14",
    "Task 15",
    "Task 16",
    "Task 17",
    "Task 18",
    "Task 19",
    "Task 20",
  ]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onDateSelection) {
      onDateSelection(date);
    }
  };

  const isCurrentDate = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const generateCalendar = () => {
    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );

    const days = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Add days of the week
    for (let i = 0; i < daysOfWeek.length; i++) {
      days.push(
        <div key={i} className="text-center font-bold">
          {daysOfWeek[i]}
        </div>
      );
    }

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="text-center"></div>);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );

      days.push(
        <div
          key={`${currentDate.toISOString()}-${i}`}
          onClick={() => handleDateClick(currentDate)}
          className={`cursor-pointer p-2 text-center border rounded ${
            isCurrentDate(currentDate) ? "bg-green-500 text-white" : ""
          } ${
            selectedDate &&
            currentDate.toDateString() === selectedDate.toDateString()
              ? "bg-blue-500 text-white"
              : ""
          }`}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const handleMonthChange = (increment) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  return (
    <div>
     <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Calendar
          </h1>
        </div>
      </header>
      <div className="max-w-xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => handleMonthChange(-1)}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
          >
            Prev Month
          </button>
          <div className="text-2xl font-bold">
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </div>
          <button
            onClick={() => handleMonthChange(1)}
            className="bg-gray-200 hover:bg-gray-300 p-2 rounded"
          >
            Next Month
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">{generateCalendar()}</div>
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Selected Date</h2>
          {selectedDate ? (
            <p>{selectedDate.toDateString()}</p>
          ) : (
            <p>No date selected.</p>
          )}
          <h2 className="text-lg font-bold mt-4 mb-2">Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

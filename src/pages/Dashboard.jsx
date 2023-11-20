import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserAuth } from "../context/AuthContext";
import TodoList from "../components/TodoList";
import TodoPercentageBar from "../components/TodoPercentageBar";
import Task from "../components/Task";
import { FaRegCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  const { logout, user } = UserAuth();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handlePrevDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      return newDate;
    });
  };

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    if (date.toDateString() === today.toDateString()) {
      return "Today, " + date.toLocaleDateString("en-US", options);
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "Yesterday, " + date.toLocaleDateString("en-US", options);
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return "Tomorrow, " + date.toLocaleDateString("en-US", options);
    } else {
      return date.toLocaleDateString("en-US", options);
    }
  };

  return (
    <div className="">
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p>Welcome, {user.email}</p>
        </div>
      </header>
      <div className="text-center p-3 text-3xl font-bold tracking-tight text-gray-900">
        <h1>{formatDate(currentDate)}</h1>
        <div className="flex justify-center mt-4">
          <button
            className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={handlePrevDay}
          >
            &larr;
          </button>
          {/* Calendar icon that opens DatePicker */}
          <button
            className="mx-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
          >
            <FaRegCalendarAlt />
          </button>
          <button
            className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
            onClick={handleNextDay}
          >
            &rarr;
          </button>
        </div>

        {isDatePickerOpen && (
          <DatePicker
            selected={currentDate}
            onChange={(date) => {
              setCurrentDate(date);
              setIsDatePickerOpen(false);
            }}
            dateFormat="MMMM d, yyyy"
            className="mx-2 px-3 py-1 bg-blue-500 text-white rounded text-center"
          />
        )}
      </div>
      <TodoPercentageBar todos={[]} />
      <div className="grid grid-cols-3 p-4">
        <Task taskName={"Homework"} />
        <Task taskName={"Workout"} />
        <Task taskName={"Study"} />
        <Task taskName={"Nutrition"} />
        <Task taskName={"Sleep"} />
        <Task taskName={"Water"} />
        <Task taskName={"Chores"} />
        <Task taskName={""} />
        <Task taskName={""} />
        <Task taskName={""} />
        <Task taskName={""} />
        <Task taskName={"Meditation"} />
      </div>
    </div>
  );
};

export default Dashboard;

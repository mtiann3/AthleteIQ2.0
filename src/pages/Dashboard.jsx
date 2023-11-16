import React from "react";
import { UserAuth } from "../context/AuthContext";
import TodoList from "../components/TodoList";
import TodoPercentageBar from "../components/TodoPercentageBar";

const Dashboard = () => {
  console.log("read");
  const { logout, user } = UserAuth();

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
      <h1 className="text-center p-3 text-3xl font-bold tracking-tight text-gray-900">
        Todays Progress
      </h1>
      {/* <TodoPercentageBar/> */}
      <TodoList />
    </div>
  );
};

export default Dashboard;

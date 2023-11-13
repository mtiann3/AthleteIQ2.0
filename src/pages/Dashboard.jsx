import React from "react";
import { UserAuth } from "../context/AuthContext";
import TodoList from "../components/TodoList";

const Dashboard = () => {
  const {logout, user } = UserAuth();

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p>Welcome, {user.email}</p>
          <p>****show todo for that day. Ex: is workout completed, is nutritional goals met, have they done their stretching, or water intake </p>
          <TodoList/>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;

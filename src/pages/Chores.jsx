// this will display all of your homework.
// inside if this you will be able to add an assignment, input the estimated amount of time to complete it,
// the due date etc
// then outside of each individual homework assignment it will show the cumulative amount of time for today.
// if assignments are not due today, it will make you work on that assignment for x amount of time. that will be determined by
// (timeToComplete/amountOfDaysUntilDue) * 1.5
import React from "react";
import TodoList from "../components/TodoList";

const Chores = () => {
  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Chores
          </h1>
        </div>
      </header>
      <TodoList/>
    </div>
  );
};

export default Chores;

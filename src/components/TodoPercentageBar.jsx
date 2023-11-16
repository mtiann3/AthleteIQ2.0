import React, { useState, useEffect } from "react";

const TodoPercentageBar = ({ todos }) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    console.log("hello")
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.isCompleted).length;
    const percentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
    setCompletionPercentage(percentage);
  }, [todos]);

  const barStyle = {
    width: `${completionPercentage}%`,
    transition: "width 0.5s ease-in-out", // Add transition property
  };

  return (
    <div className="p-2 px-10">
      <div className="w-full  bg-gray-200 rounded-full  overflow-hidden">
        <div className="h-8 bg-blue-500" style={barStyle} />
      </div>
      <div className="text-center py-2 font-bold text-lg">
        {`Completion: ${completionPercentage.toFixed(2)}%`}
      </div>
    </div>
  );
};

export default TodoPercentageBar;

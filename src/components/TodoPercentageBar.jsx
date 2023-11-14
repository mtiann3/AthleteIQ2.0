// import React, { useState, useEffect } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import { UserAuth } from "../context/AuthContext";
// import LoadingSpinner from "./LoadingSpinner";

// const TodoPercentageBar = () => {
//   const [completionPercentage, setCompletionPercentage] = useState(0);
//   const { user, isLoading } = UserAuth();

//   const calculateCompletionPercentage = async () => {
//     try {
//       const userDocRef = doc(db, "users", user.uid);
//       const userDocSnap = await getDoc(userDocRef);
  
//       if (userDocSnap.exists()) {
//         const todos = userDocSnap.data().todos || [];
//         console.log("Todos:", todos);
  
//         const totalTodos = todos.length;
//         const completedTodos = todos.filter((todo) => todo.isCompleted).length;
//         console.log("Total Todos:", totalTodos);
//         console.log("Completed Todos:", completedTodos);
  
//         // Calculate percentage
//         const percentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
//         console.log("Percentage:", percentage);
  
//         setCompletionPercentage(percentage);
//       } else {
//         console.error('User document not found.');
//       }
//     } catch (error) {
//       console.error('Error calculating completion percentage:', error);
//     }
//   };
  

//   useEffect(() => {
//     // Ensure that useEffect is called unconditionally
//     calculateCompletionPercentage();
//   }, [user]); // Include user in the dependency array if it's used inside useEffect

//   if (isLoading) {
//     // Handle loading state (e.g., show a loading spinner)
//     return <LoadingSpinner />;
//   }

//   if (!user || !user.uid) {
//     // Handle the case when user or user.uid is undefined
//     console.error("User or user ID not available.");
//     return null; // or return an error state, redirect, etc.
//   }

//   return (
//     <div className="w-full bg-gray-200 rounded-md overflow-hidden">
//       <div
//         className="h-8 bg-blue-500"
//         style={{ width: `${completionPercentage}%` }}
//       />
//       <div className="text-center py-2">
//         {`Completion: ${completionPercentage.toFixed(2)}%`}
//       </div>
//     </div>
//   );
// };

// export default TodoPercentageBar;
// TodoPercentageBar.jsx
import React, { useState, useEffect } from "react";

const TodoPercentageBar = ({ todos }) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const totalTodos = todos.length;
    const completedTodos = todos.filter((todo) => todo.isCompleted).length;
    const percentage = totalTodos > 0 ? (completedTodos / totalTodos) * 100 : 0;
    setCompletionPercentage(percentage);
  }, [todos]);

  return (
    <div className="w-full bg-gray-200 rounded-md overflow-hidden">
      <div
        className="h-8 bg-blue-500"
        style={{ width: `${completionPercentage}%` }}
      />
      <div className="text-center py-2">
        {`Completion: ${completionPercentage.toFixed(2)}%`}
      </div>
    </div>
  );
};

export default TodoPercentageBar;

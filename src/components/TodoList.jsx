import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import TodoPercentageBar from "./TodoPercentageBar";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const { user } = UserAuth();

  const fetchTodos = async () => {
    console.log("read")
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);  
      // Check if docSnap and its data property exist
      if (docSnap && docSnap.data()) {
        const userTodos = docSnap.data().todos;  
        // Check if userTodos is an array
        if (Array.isArray(userTodos)) {
          setTodos(userTodos);
        } else {
          console.error("User todos is not an array:", userTodos);
        }
      } else {
        console.error("No data found in docSnap:", docSnap);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      const userFoodArr = docSnap.data().todos;

      let arrTemp = userFoodArr ? [...userFoodArr] : [];
      arrTemp.push({
        id: new Date().getTime(), // Generate a unique ID (you can use a better method)
        text: input,
        isCompleted: false,
      });

      await updateDoc(docRef, {
        todos: arrTemp,
      });

      setInput(""); // Clear the input field after adding a todo
      await fetchTodos(); // Fetch todos after adding a new one
    } catch (e) {
      console.log("Error updating user: ", e);
    }
  };

  const toggleComplete = async (id, isCompleted) => {
    try {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
      );

      setTodos(updatedTodos);

      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { todos: updatedTodos });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const updatedTodos = todos.filter((todo) => todo.id !== id);

      setTodos(updatedTodos);

      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { todos: updatedTodos });

      console.log("Todo deleted successfully!");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  //   fetchTodos();
  useEffect(() => {
    // Run fetchTodos once when the component is mounted
    fetchTodos();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <TodoPercentageBar todos={todos} />

      <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg justify-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-400 w-full p-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Add a new todo..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Add Todo
        </button>
        <ul className="list-disc list-inside mt-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center my-2 bg-white p-3 rounded-lg shadow-md"
            >
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleComplete(todo.id, todo.isCompleted)}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span
                className={
                  todo.isCompleted ? "line-through ml-3 text-gray-500" : "ml-3"
                }
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="ml-auto text-white bg-red-500 border border-red-700 hover:bg-red-700 px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

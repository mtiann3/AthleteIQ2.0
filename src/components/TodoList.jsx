import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const { user } = UserAuth();

  const fetchTodos = async () => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      
      // Check if the user document exists
      if (docSnap.exists()) {
        const todoCollection = docSnap.data().todos || []; // Use an empty array as a default if todos is not defined
  
        // Map over the todos array and set the state
        setTodos(todoCollection.map((todo) => ({ ...todo, id: todo.id })));
      } else {
        console.error('User document not found.');
      }
    } catch (error) {
      console.error('Error fetching user document:', error);
    }
  };
  

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async () => {
    try {
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      
      // Check if the user document exists
      if (userDocSnap.exists()) {
        const todos = userDocSnap.data().todos || [];
  
        // Add a new todo to the user's todos array
        await updateDoc(userDocRef, {
          todos: [...todos, { text: input, isCompleted: false }]
        });
  
        setInput("");
        fetchTodos(); // Refresh todos after adding a new one
      } else {
        console.error('User document not found.');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };
  

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    fetchTodos();
  };

  const toggleComplete = async (id, isCompleted) => {
    await updateDoc(doc(db, "todos", id), {
      isCompleted: !isCompleted,
    });
    fetchTodos();
  };

  return (
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
  );
};

export default TodoList;

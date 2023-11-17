// src/components/WorkoutPlanner.js
import React, { useState } from "react";

const WeeklyPlanner = ({day}) => {
  const [exercises, setExercises] = useState([]);

  const addExercise = () => {
    setExercises([
      ...exercises,
      { id: Date.now(), name: "", weight: "", reps: "", sets: "" },
    ]);
  };

  const removeExercise = (id) => {
    setExercises(exercises.filter((exercise) => exercise.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      )
    );
  };

  return (
    <div className="container mx-auto my-8 border-2 p-4">
      <h1 className="text-3xl font-bold mb-4">{day}'s Workout</h1>
      {exercises.map((exercise) => (
        <div key={exercise.id} className="mb-4">
          <input
            type="text"
            placeholder="Exercise Name"
            value={exercise.name}
            onChange={(e) =>
              handleInputChange(exercise.id, "name", e.target.value)
            }
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Weight"
            value={exercise.weight}
            onChange={(e) =>
              handleInputChange(exercise.id, "weight", e.target.value)
            }
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Reps"
            value={exercise.reps}
            onChange={(e) =>
              handleInputChange(exercise.id, "reps", e.target.value)
            }
            className="border rounded p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Sets"
            value={exercise.sets}
            onChange={(e) =>
              handleInputChange(exercise.id, "sets", e.target.value)
            }
            className="border rounded p-2 mr-2"
          />
          <button
            onClick={() => removeExercise(exercise.id)}
            className="bg-red-500 text-white p-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        onClick={addExercise}
        className="bg-green-500 text-white p-2 rounded"
      >
        Add Exercise
      </button>
    </div>
  );
};

export default WeeklyPlanner;

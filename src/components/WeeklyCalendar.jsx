import React, { useState } from "react";

const WeeklyPlanner = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [weeklyExercises, setWeeklyExercises] = useState({});

  const addExercise = (day) => {
    setWeeklyExercises((prevExercises) => ({
      ...prevExercises,
      [day]: [
        ...(prevExercises[day] || []),
        { id: Date.now(), name: "", weight: "", reps: "", sets: "" },
      ],
    }));
  };

  const removeExercise = (day, id) => {
    setWeeklyExercises((prevExercises) => ({
      ...prevExercises,
      [day]: (prevExercises[day] || []).filter((exercise) => exercise.id !== id),
    }));
  };

  const handleInputChange = (day, id, field, value) => {
    setWeeklyExercises((prevExercises) => ({
      ...prevExercises,
      [day]: (prevExercises[day] || []).map((exercise) =>
        exercise.id === id ? { ...exercise, [field]: value } : exercise
      ),
    }));
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-screen-lg">
        {days.map((day) => (
          <div key={day} className="border p-4 mb-8">
            <h1 className="text-3xl font-bold mb-4">{day}'s Workout</h1>
            {weeklyExercises[day] &&
              weeklyExercises[day].map((exercise) => (
                <div key={exercise.id} className="mb-4">
                  <input
                    type="text"
                    placeholder="Exercise Name"
                    value={exercise.name}
                    onChange={(e) => handleInputChange(day, exercise.id, "name", e.target.value)}
                    className="border rounded p-2 mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Weight"
                    value={exercise.weight}
                    onChange={(e) => handleInputChange(day, exercise.id, "weight", e.target.value)}
                    className="border rounded p-2 mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Reps"
                    value={exercise.reps}
                    onChange={(e) => handleInputChange(day, exercise.id, "reps", e.target.value)}
                    className="border rounded p-2 mr-2"
                  />
                  <input
                    type="text"
                    placeholder="Sets"
                    value={exercise.sets}
                    onChange={(e) => handleInputChange(day, exercise.id, "sets", e.target.value)}
                    className="border rounded p-2 mr-2"
                  />
                  <button
                    onClick={() => removeExercise(day, exercise.id)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
            <button onClick={() => addExercise(day)} className="bg-green-500 text-white p-2 rounded">
              Add Exercise
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyPlanner;

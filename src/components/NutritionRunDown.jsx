// DailyNutritionRundown.js
import React, { useState } from 'react';

const NutritionRundown = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Chicken Breast', protein: 30, carbohydrates: 0, fat: 3, servings: 1 },
    { id: 2, name: 'Brown Rice', protein: 5, carbohydrates: 45, fat: 1, servings: 1 },
    { id: 3, name: 'Avocado', protein: 2, carbohydrates: 12, fat: 15, servings: 1 },
  ]);

  const [selectedFood, setSelectedFood] = useState(null);
  const [newFood, setNewFood] = useState({
    name: '',
    protein: 0,
    carbohydrates: 0,
    fat: 0,
    servings: 1,
  });
  const [dailyIntake, setDailyIntake] = useState({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  const handleFoodClick = (food) => {
    setSelectedFood((prevFood) => (prevFood && prevFood.id === food.id ? null : food));
  };

  const handleAddFood = () => {
    const newFoodWithId = { ...newFood, id: foods.length + 1 };
    setFoods([...foods, newFoodWithId]);
    setDailyIntake((prevIntake) => ({
      calories:
        prevIntake.calories +
        newFoodWithId.protein * 4 * newFoodWithId.servings +
        newFoodWithId.carbohydrates * 4 * newFoodWithId.servings +
        newFoodWithId.fat * 9 * newFoodWithId.servings,
      protein: prevIntake.protein + newFoodWithId.protein * newFoodWithId.servings,
      carbohydrates: prevIntake.carbohydrates + newFoodWithId.carbohydrates * newFoodWithId.servings,
      fat: prevIntake.fat + newFoodWithId.fat * newFoodWithId.servings,
    }));
    setNewFood({ name: '', protein: 0, carbohydrates: 0, fat: 0, servings: 1 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const intValue = name === 'name' ? value : parseInt(value, 10) || 0;
    setNewFood({
      ...newFood,
      [name]: intValue,
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Daily Nutrition Rundown</h1>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Logged Foods</h2>
          <ul className="list-none p-0">
            {foods.map((food) => (
              <li key={food.id} onClick={() => handleFoodClick(food)} className="cursor-pointer text-blue-500">
                {food.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Add Food</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newFood.name}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Protein (g)</label>
            <input
              type="number"
              name="protein"
              value={newFood.protein}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Carbohydrates (g)</label>
            <input
              type="number"
              name="carbohydrates"
              value={newFood.carbohydrates}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Fat (g)</label>
            <input
              type="number"
              name="fat"
              value={newFood.fat}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Servings</label>
            <input
              type="number"
              name="servings"
              value={newFood.servings}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <button onClick={handleAddFood} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Add Food
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Food Details</h2>
          {selectedFood && (
            <ul>
              <li>Name: {selectedFood.name}</li>
              <li>Protein: {selectedFood.protein} g</li>
              <li>Carbohydrates: {selectedFood.carbohydrates} g</li>
              <li>Fat: {selectedFood.fat} g</li>
              <li>Servings: {selectedFood.servings}</li>
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Today's Total Intake</h2>
          <ul>
            <li>Calories: {dailyIntake.calories} kcal</li>
            <li>Protein: {dailyIntake.protein} g</li>
            <li>Carbohydrates: {dailyIntake.carbohydrates} g</li>
            <li>Fat: {dailyIntake.fat} g</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NutritionRundown;

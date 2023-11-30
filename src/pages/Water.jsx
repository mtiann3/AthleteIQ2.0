import React, { useState } from "react";

const Water = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState("");

  const addWater = (amount) => {
    if (!isNaN(amount)) {
      setWaterIntake(waterIntake + amount);
      setAmountToAdd("");
    }
  };

  const clearWaterIntake = () => {
    setWaterIntake(0);
    setAmountToAdd("");
  };

  return (
    <div className="">
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Daily Water Intake
          </h1>
        </div>
      </header>
      <div className="flex flex-col items-center p-4">
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={amountToAdd}
            onChange={(e) => setAmountToAdd(e.target.value)}
            placeholder="Amount to add (oz)"
            className="border border-gray-400 p-2 mr-2 w-24 text-center"
          />
          <button
            onClick={() => addWater(parseInt(amountToAdd, 10))}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Add
          </button>
          <button
            onClick={clearWaterIntake}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
          >
            Clear
          </button>
        </div>

        <div className="flex items-center mb-4">
          <button
            onClick={() => addWater(8)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            +8 oz
          </button>
          <button
            onClick={() => addWater(16)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
          >
            +16 oz
          </button>
          <button
            onClick={() => addWater(32)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            +32 oz
          </button>
        </div>

        <p className="text-lg">Your current water intake: {waterIntake} oz</p>
      </div>
    </div>
  );
};

export default Water;

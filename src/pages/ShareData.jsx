import React, { useState } from 'react';

const ShareData = () => {
  const [email, setEmail] = useState('');
  const [selectedData, setSelectedData] = useState({
    strength: false,
    athletic: false,
    nutrition: false,
    sleep: false,
    water: false,
  });

  const handleCheckboxChange = (type) => {
    setSelectedData((prevData) => ({
      ...prevData,
      [type]: !prevData[type],
    }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleShareData = () => {
    // Placeholder for future data sharing logic
    console.log('Data sharing functionality will be implemented here');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-4">Share Data</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Data to Share:</label>
        <div className="flex flex-col space-y-2">
          {Object.keys(selectedData).map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={type}
                checked={selectedData[type]}
                onChange={() => handleCheckboxChange(type)}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <label htmlFor={type} className="ml-2 text-gray-700">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Enter Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        onClick={handleShareData}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Share Data
      </button>
    </div>
  );
};

export default ShareData;

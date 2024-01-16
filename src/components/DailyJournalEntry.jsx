// DailyJournalEntry.js

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const DailyJournalEntry = () => {
  const [entry, setEntry] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const saveJournalEntry = () => {
    // You can implement the logic to save the journal entry to your database or local storage here
    console.log('Saving Journal Entry:', { entry, rating });
    // Clear the form after saving if needed
    setEntry('');
    setRating(0);
  };

  return (
    <div className="container mx-auto mt-8 max-w-md">

      <label className="block mb-2 text-sm text-gray-600">Rating (out of 10)</label>
      <div className="flex mb-4">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleRatingChange(index + 1)}
            className={`rounded-full h-8 w-8 mr-2 ${
              index < rating ? 'bg-blue-500' : 'bg-gray-200'
            } focus:outline-none`}
          />
        ))}
      </div>
      <label className="block mb-2 text-sm text-gray-600">What went well today? What did you do? What could have you done better at?</label>
      <textarea
        value={entry}
        onChange={handleEntryChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        rows="5"
      />
      <div className="mt-4">
        <button
          onClick={saveJournalEntry}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default DailyJournalEntry;

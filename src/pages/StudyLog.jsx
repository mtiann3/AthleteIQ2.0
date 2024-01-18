import React, { useState } from 'react';

const StudyLog = () => {
  const [studyToday, setStudyToday] = useState(false);
  const [summary, setSummary] = useState('');
  const [showPreviousLogs, setShowPreviousLogs] = useState(false);
  const isSubmitDisabled = !studyToday || summary.length < 50;

  const handleStudyTodayChange = (e) => {
    setStudyToday(e.target.checked);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handleSubmit = () => {
    // You can handle submission logic here if needed
    // For now, it just shows the button to see previous logs
    setShowPreviousLogs(true);
  };

  const handleSeePreviousLogs = () => {
    // You can implement logic to show previous reading logs here
    // For now, it doesn't do anything
  };

  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Daily Study Log
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-2xl mt-8 p-4 bg-white rounded-lg shadow">
        <label className="block mb-4">
          <input
            type="checkbox"
            checked={studyToday}
            onChange={handleStudyTodayChange}
            className="mr-2"
          />
          <span className="text-lg font-semibold">Did you study for at least 15 minutes today?</span>
        </label>

        {studyToday && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Write a short overview of what you studied and how it can help you:</label>
            <textarea
              value={summary}
              onChange={handleSummaryChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your summary here..."
            />
          </div>
        )}

        <button
          onClick={handleSubmit}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>

        {showPreviousLogs && (
          <button
            onClick={handleSeePreviousLogs}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            See previous study logs
          </button>
        )}
      </div>
    </div>
  );
};

export default StudyLog;

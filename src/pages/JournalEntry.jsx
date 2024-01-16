import React from "react";
import DailyJournalEntry from "../components/DailyJournalEntry";

const JournalEntry = () => {
  return (
    <div>
      <header className="bg-blue-100 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-left text-3xl font-bold tracking-tight text-gray-900">
            Daily Journal Entry
          </h1>
        </div>
      </header>
      <DailyJournalEntry />
    </div>
  );
};

export default JournalEntry;

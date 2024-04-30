import React, { useState } from 'react';


export const PatientBookForm = () => {
  const [startTime, setStartTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or validation here
  };

  const handleTimeChange = (e) => {
    // Handle time change and validation here
    setStartTime(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 dark">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Appointment Form</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            placeholder="Full Name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
            placeholder="Age"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="number"
          />
          <textarea
            placeholder="Problem Description"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 h-24 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          ></textarea>
          <input
            placeholder="Preferred Timing"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="time"
            value={startTime}
            onChange={handleTimeChange}
          />
          <input
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="date"
            type="date"
          />
          <button
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

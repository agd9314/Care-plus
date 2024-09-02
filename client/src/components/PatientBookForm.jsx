import React, { useState } from 'react';
import axios from 'axios';


export const PatientBookForm = () => {
  const Id = window.location.pathname.split("/")[3];
  const doctorid = Id.split("=")[1];
  const [appointment, setAppointment] = useState({
    name : "",
    age : "",
    problemDescription : "",
    preferredTiming : "",
    date : "",
    doctorName : "",
    phone : "",
  })
  const handleSumbit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/bookappointment",
        {
          patientName: appointment.name,
          patientAge: parseInt(appointment.age),
          problem: appointment.problemDescription,
          scheduleDate: appointment.date,
          scheduleTime: appointment.preferredTiming,
          doctorId: doctorid,
          patientPhone: parseInt(appointment.phone),
          doctorName: appointment.doctorName,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      alert(res?.data?.message || "Appointment booked successfully");
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <div className="flex items-center justify-center h-secreen w-full bg-gray-800 dark">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Appointment Form</h2>
        <div  className="flex flex-col">
          <input
          onChange={(e)=>setAppointment({...appointment, name : e.target.value})}
            placeholder="Full Name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
          onChange={(e)=>setAppointment({...appointment, phone : e.target.value})}
            placeholder="Patient Phone Number"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
          onChange={(e)=>setAppointment({...appointment, doctorName : e.target.value})}
            placeholder="DoctorName Name"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
          />
          <input
          onChange={(e)=>setAppointment({...appointment, age : e.target.value})}
            placeholder="Age"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="number"
          />
          <textarea
          onChange={(e)=>setAppointment({...appointment, problemDescription : e.target.value})}
            placeholder="Problem Description"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 h-24 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
          ></textarea>
          <input
          onChange={(e)=>setAppointment({...appointment, preferredTiming : e.target.value})}
            placeholder="Preferred Timing"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="time"
            value={appointment.preferredTiming}
          />
          <input
          onChange={(e)=>setAppointment({...appointment, date : e.target.value})}
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="date"
            type="date"
          />
          <button
          onClick={handleSumbit}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Submit Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

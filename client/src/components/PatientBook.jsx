import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { BiSolidFirstAid } from "react-icons/bi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
function PatientBook() {
  const navigate = useNavigate();
  const [patient, setpatient] = useState({})
  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (!token) {
      navigate('/login')
    }

    if (user) {
      setpatient(JSON.parse(user))
    }
  }, [])
  return (
    <div >
      <div className="min-h-screen bg-blue-400 flex">
        <div className="w-64 bg-white p-5 flex flex-col gap-3 min-w-64">
          <div className="mb-5 flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <FaCircleUser className=" text-3xl" />
              <div>
                <div className="font-bold">{patient.name}</div>
                <div className="text-sm text-zinc-600">{patient.email}</div>
              </div>
            </div>
            <button onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              navigate('/login')
            }} className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">
              Log out
            </button>
          </div>
          <div className="mt-10 flex flex-col ">
            <ul className=" flex flex-col gap-3">
              <li className="mb-2">
                <Link
                  to="/patien-book"
                  className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-0 text-zinc-700"
                >
                  <i className="fas fa-home"></i>
                  <MdHomeFilled />
                  <span>Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/patien-book/AllDoctors"
                  className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-2 text-zinc-700"
                >
                  <i className="fas fa-user-md">
                    {" "}
                    <BiSolidFirstAid />{" "}
                  </i>
                  <span>All Doctors</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/patien-book/scheduledSession"
                  className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-2 text-zinc-700"
                >
                  <i className="fas fa-calendar-alt">
                    {" "}
                    <TbHeartRateMonitor />{" "}
                  </i>
                  <span>Scheduled Sessions</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link to={"/patien-book/MyBookings"} className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-2 text-zinc-700">
                  <i className="fas fa-book-medical">
                    {" "}
                    <FaBookmark />{" "}
                  </i>
                  <span>My Bookings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <>
          <Outlet />
        </>

      </div>
    </div>
  );
}

export default PatientBook;


export const Home = () => {
  const navigate = useNavigate();
  const appointments = JSON.parse(localStorage.getItem('appointment'));
  const session = JSON.parse(localStorage.getItem('session'));
  return <div className="w-full h-full">
    <div className="bg-blue-400 p-8 h-full">
      <div className="flex justify-between items-center mb-8">
        <div className="text-right">
          <span className="text-lg">Today's Date</span>
          <span className="ml-2 bg-zinc-200 p-2 rounded">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-blue-200 p-4 rounded-lg shadow ">
          <div className="flex items-center justify-between mb-4 ">
            <h2 className="text-lg font-semibold">Status</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold">{appointments?.length || 0}</h3>
              <p>Total appointments</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="text-2xl font-bold">{session?.length || 0}</h3>
              <p>Today Sessions</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg shadow">

          <table className="w-full mb-4">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2">Appointment Number</th>
                <th className="p-2">Doctor</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
             
                {session?.length > 0 ?  <tr>
                  <td className="p-2">{session[0]._id}</td>
                  <td className="p-2">{session[0].doctorName}</td>
                  <td className="p-2">{session[0]?.scheduleDate}</td> 
              </tr> : <tr> <td colSpan="3" className="p-2">No session today</td> </tr>}
            </tbody>
          </table>
          <button onClick={() => {
            navigate('/patien-book/scheduledSession')
          }} className="bg-blue-500 text-white px-4 py-2 rounded">Show all Sessions</button>
        </div>
      </div>

      <div className="bg-blue-200 p-4 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        </div>

        <table className="w-full mb-4">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2">Appointment number</th>
              <th className="p-2">Patient name</th>
              <th className="p-2">Doctor</th>
            </tr>
          </thead>
          <tbody>

            {appointments?.length > 0 ? <tr>
              <td className="p-2">{appointments[0]._id}</td>
              <td className="p-2">{appointments[0].patientName}</td>
              <td className="p-2">{appointments[0].doctorName}</td>
            </tr> : <tr> <td colSpan="3" className="p-2">No upcoming appointments</td> </tr>}
          </tbody>
        </table>
        <button onClick={() => {
          navigate('/patien-book/MyBookings')
        }} className="bg-blue-500 text-white px-4 py-2 rounded">Show all Appointments</button>
      </div>
    </div>
  </div>
}


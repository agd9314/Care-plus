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
  const [patient , setpatient] = useState({})
  useEffect(()=> {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if(!token){
      navigate('/login')
    }

    if(user){
      setpatient(JSON.parse(user))
    }
  },[])
  return (
    <div>
      <div className="min-h-screen bg-zinc-100 flex">
        <div className="w-64 bg-white p-5 flex flex-col gap-3 min-w-64">
          <div className="mb-5 flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              {/* <img src="https://placehold.co/40x40" alt="profile" className="rounded-full"/> */}
              <FaCircleUser className=" text-3xl" />
              <div>
                <div className="font-bold">{patient.name}</div>
                <div className="text-sm text-zinc-600">{patient.email}</div>
              </div>
            </div>
            <button onClick={()=>{
              localStorage.removeItem('token')
              localStorage.removeItem('user')
              navigate('/login')
            }}  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">
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
              <li className="mb-2">
                <Link
                  to="/patien-book/settings"
                  className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-2 text-zinc-700"
                >
                  <i className="fas fa-cog">
                    {" "}
                    <IoSettings />{" "}
                  </i>
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <>
            <Outlet/>
        </>
        
      </div>
    </div>
  );
}

export default PatientBook;


export const Home = () => {
    return <div>
        <div className="bg-white p-8">
            <div className="flex justify-between items-center mb-8">
                <input type="text" placeholder="Search Doctor name or Email" className="border p-2 rounded w-1/3"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
                <div className="text-right">
                    <span className="text-lg">Today's Date</span>
                    <span className="ml-2 bg-zinc-200 p-2 rounded">2022-06-03</span>
                </div>
            </div>
        <div className="grid grid-cols-2 gap-8 mb-8">
            <div className="bg-zinc-100 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Status</h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                        <h3 className="text-2xl font-bold">1</h3>
                        <p>Doctors</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                        <h3 className="text-2xl font-bold">2</h3>
                        <p>Patients</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                        <h3 className="text-2xl font-bold">1</h3>
                        <p>New Booking</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                        <h3 className="text-2xl font-bold">0</h3>
                        <p>Today Sessions</p>
                    </div>
                </div>
            </div>
            <div className="bg-zinc-100 p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Upcoming Sessions until Next Friday</h2>
                </div>
                <p className="mb-4">Here's Quick access to Upcoming Sessions that Scheduled until 7 days Add, Remove and Many features available in @Schedule section.</p>
                <table className="w-full mb-4">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="p-2">Session Title</th>
                            <th className="p-2">Doctor</th>
                            <th className="p-2">Scheduled Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2">Session 1</td>
                            <td className="p-2">Dr. Smith</td>
                            <td className="p-2">2022-06-04 10:00 AM</td>
                        </tr>
                        
                    </tbody>
                </table>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Show all Sessions</button>
            </div>
        </div>
        
        <div className="bg-zinc-100 p-4 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Upcoming Appointments until Next Friday</h2>
            </div>
            <p className="mb-4">Here's Quick access to Upcoming Appointments until 7 days More details available in @Appointment section.</p>
            <table className="w-full mb-4">
                <thead>
                    <tr className="bg-blue-100">
                        <th className="p-2">Appointment number</th>
                        <th className="p-2">Patient name</th>
                        <th className="p-2">Doctor</th>
                        <th className="p-2">Session</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">A001</td>
                        <td className="p-2">John Doe</td>
                        <td className="p-2">Dr. Smith</td>
                        <td className="p-2">Session 1</td>
                    </tr>
                    
                </tbody>
            </table>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Show all Appointments</button>
        </div>
        </div>
    </div>
}










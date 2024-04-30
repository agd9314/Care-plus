import React, { useEffect , useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { BiSolidFirstAid } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MyBookings } from './Mybooking';
import axios from 'axios';
function DoctorBook() {
  const navigate = useNavigate();
  const doctor = JSON.parse(localStorage.getItem('Doctor'))
  useEffect(()=> {
    const token = localStorage.getItem('DoctorToken')
    if(!token){
      navigate('/login-doctor')
    }
  },[])
  return (
    <div>
      <div>
      <div className="min-h-screen bg-zinc-100 flex">
        <div className="w-64 bg-white p-5 flex flex-col gap-3 min-w-64">
          <div className="mb-5 flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <FaCircleUser className=" text-3xl" />
              <div>
                <div className="font-bold">{doctor?.name}</div>
                <div className="text-sm text-zinc-600">{doctor?.email}</div>
              </div>
            </div>
            <button onClick={()=>{
                localStorage.removeItem('DoctorToken')
                localStorage.removeItem('Doctor')
                navigate('/login-doctor')
            }}  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">
              Log out
            </button>
          </div>
          <div className="mt-10 flex flex-col ">
            <ul className=" flex flex-col gap-3">
              <li className="mb-2">
                <Link
                  to="/doctor-book"
                  className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-0 text-zinc-700"
                >
                  <i className="fas fa-home"></i>
                  <MdHomeFilled />
                  <span>Home</span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/doctor-book/Mypatients"
                  className=" hover:text-blue-500 flex trad duration-150 ease-in-out items-center  space-x-2 text-zinc-700"
                >
                  <i className="fas fa-user-md">
                    {" "}
                    <BiSolidFirstAid />{" "}
                  </i>
                  <span>My patient</span>
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
    </div>
  )
}

export default DoctorBook

export const   Mypatients  = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/doctor/getallappointments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('DoctorToken')}`
      }
    })
      .then((res) => {
        setBookings(res.data.patinet)
        localStorage.setItem('appointment', JSON.stringify(res.data.patinet))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return <div className="w-full">
    {bookings.length > 0 ? <div className="bg-zinc-100 p-4 grid grid-cols-3 items-center gap-4">
      {bookings.map((booking, index) => {
        return <div key={index} className="max-w-4xl mx-auto bg-white shadow-lg">
          <div className="mb-6">
            <div className="mt-4 bg-zinc-50 p-4 rounded-lg">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="mb-4">
                  <div className="text-sm">Appointment Number: {booking._id} </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm">Booking Date: <span className="font-semibold">{booking.
                    bookedDate}</span></div>
                  <div className="text-sm">Booking Time: <span className="font-semibold">{booking.
                    bookedTime}</span></div>
                  <div className="text-sm">Patient Name: <span className="font-semibold">{booking.
                    patientName}</span></div>
                  <div className="text-sm">Patient Phone: <span className="font-semibold">{booking.
                    patientPhone}</span></div>
                  <div className="text-sm">Patient Problem: <span className="font-semibold">{booking.
                    problem}</span></div>
                  <div className="text-sm">Booking Satus: <span className="font-semibold">{booking.
                    status}</span></div>
                </div>
                <div className="mb-4">
                  <div className="text-sm">Doctor Name :  {booking.
                    doctorName}</div>
                  <div className="text-sm">Scheduled Date: <span className="font-semibold">{booking.
                    scheduleDate}</span></div>
                  <div className="text-sm">Starts: <span className="font-semibold">{booking.scheduleTime}</span></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      })}

    </div> : <div className="text-lg flex justify-center items-center font-semibold h-full w-full">No Booking</div>}
  </div>
}

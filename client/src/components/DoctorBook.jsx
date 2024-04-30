import React from 'react'
// mport { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { BiSolidFirstAid } from "react-icons/bi";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
function DoctorBook() {
  return (
    <div>
      <div>
      <div className="min-h-screen bg-zinc-100 flex">
        <div className="w-64 bg-white p-5 flex flex-col gap-3 min-w-64">
          <div className="mb-5 flex flex-col gap-2">
            <div className="flex items-center space-x-2">
              <FaCircleUser className=" text-3xl" />
              <div>
                <div className="font-bold">absc</div>
                <div className="text-sm text-zinc-600">tbsc</div>
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


              <li className="mb-2">
                <Link
                  to="/doctor-book/settings"
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
    </div>
  )
}

export default DoctorBook



export const Mypatients = ()=>{
    return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full"  />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> name</div>
        <p className="text-gray-700 text-base">
          Age: 19<br />
          Problem: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quas?<br />
          Appointment Date:12-12-2024
          <br />
          Time: 19:11<br />
          Appointment Number: 202114310 <br />
          
        </p>
      </div>
    </div>
    </div>
    
  )
}

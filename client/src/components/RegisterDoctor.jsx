import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserDoctor } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";

function RegisterDoctor() {
  return (
    <div>
      <div>
      <div className=' h-full w-screen items-center p-4 bg-[#16202a]'>
      <Link to={"/"}>
      <button className="fixed top-0 left-0 mt-4 mr-4 px-6 py-4  text-white bg-transparent rounded-full font-semibold text-lg overflow-hidden transition-all duration-250 hover:text-blue-500 hover:before:w-full">
        <IoArrowBack className=' size-[30px]'></IoArrowBack>
      </button>
      </Link>
      {/* <body className="bg-zinc-900 text-white min-h-screen flex items-center justify-center"/> */}
            <div className="w-full ml-9 max-w-lg p-8 space-y-6 rounded-lg shadow-lg text-white bg-[#16202a]">
                <h1 className="text-4xl font-bold flex flex-col gap-6"> <span>Register Your self  as Doctor</span> <FaUserDoctor></FaUserDoctor></h1>
                <p className="text-zinc-400">Lorem ipsum dolor sit amet.</p>
                <div>
                    <label  htmlFor="name" className="block text-sm font-medium text-zinc-300">Name*</label>
                    <input type="Name" name="name" id="name" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Name" onChange={(e) => setName(e.target.value)}  />
                </div>
                

                <div>
                    <label  htmlFor="dob" className="block text-sm font-medium text-zinc-300">Date Of Birth*</label>
                    <input type="Date" name="dob" id="dob" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Name" onChange={(e) => setDob(e.target.value)}  />
                </div>

                <div>
                    <label  htmlFor="gender" className="block text-sm font-medium text-zinc-300">Gender*</label>
                    <select className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  name="gender" id="gender" form="gender" onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others💀</option>
                    </select>
                </div>


                <div>
                    <label  htmlFor="specialization" className="block text-sm font-medium text-zinc-300">Specialization*</label>
                    <input type="text" name="specialization" id="specialization" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="specialization" onChange={(e) => specialization(e.target.value)}  />
                </div>


                <div>
                    <label  htmlFor="degree" className="block text-sm font-medium text-zinc-300">Degree*</label>
                    <input type="text" name="degree" id="degree" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="degree" onChange={(e) => degree(e.target.value)}  />
                </div>


                <div>
                    <label  htmlFor="address" className="block text-sm font-medium text-zinc-300">Address*</label>
                    <textarea rows="4" cols="20" type="text" name="address" id="address" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="address" onChange={(e) => address(e.target.value)}  />
                </div>

                <div>
                    <label  htmlFor="email" className="block text-sm font-medium text-zinc-300">Email*</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="mail@website.com" onChange={(e) => setEmail(e.target.value)}  />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password*</label>
                    <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Min. 8 character" onChange={(e) => setPassword(e.target.value)} />
                </div>


                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Confirm Password*</label>
                    <input type="password" name="Cnfpassword" id="Cnfpassword" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Confirm password" onChange={(e) => setPassword(e.target.value)} />
                </div>


                <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Register
                </button>
                <p className="text-xs text-zinc-400 text-center">Already registerd ? <Link className=' text-blue-500' to={"/login-doctor"}>click here to Login</Link></p>
            </div>
    </div>
    </div>
    </div>
  )
}

export default RegisterDoctor

import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { TiUser } from "react-icons/ti";
import doctorGif from '../assets/MentalTherapy.mp4'


function Home() {

  
  return (
    <div>
      <div className=" flex flex-row justify-between">
        <div className="bg-blue-100 w-[100%]">
            <header className=" bg-blue-100 py-4">
                <div className="container mx-auto flex bg-blue-100 justify-between items-center px-6">
                    <h1 className="text-6xl font-bold bg-blue-100 text-blue-600">Care +</h1>
                    
                </div>
            </header>
            <main className="container mx-auto px-6 py-12 h-screen w-full  flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-800 mb-4">Take Care Of Your Health Mission</h2>
                        <p className="text-blue-700 mb-6">At health grades, we take the guesswork out of finding the right doctors and care for you and your family.</p>
                        <div className="flex space-x-4">
                 
                            <Link to={"/login"}>
                              <button className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-indigo-600 flex flex-row px-6 py-2 font-medium text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"><span>Continue as Patient </span><span><TiUser className='m-2 size-4'/></span></button>
                              </Link>

                              <Link to={"/login-doctor"}>
                              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-indigo-600 flex flex-row px-6 py-2 font-medium text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"> <span>Continue as Docotor</span><span><FaUserDoctor className=' mt-4 size-4'/></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div className=' h-screen w-full flex justify-center items-center'>
          <video autoPlay loop src={doctorGif}></video>
          
        </div>
      </div>
    </div>
  )
}

export default Home

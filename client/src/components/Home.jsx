import React from 'react'
// import wallpaper from '../assets/mailWallpaper.avif'
import { FaUserDoctor } from "react-icons/fa6";
function Home() {
  return (
    <div>
      <div className=" flex flex-row justify-between">
        <body className="bg-blue-100 w-[100%]">
            <header className=" bg-blue-100 py-4">
                <div className="container mx-auto flex bg-blue-100 justify-between items-center px-6">
                    <h1 className="text-xl font-bold bg-blue-100 text-blue-600">Healthly</h1>
                    
                </div>
            </header>
            <main className="container mx-auto px-6 py-12 h-screen w-full  flex">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-blue-800 mb-4">Take Care Of Your Health Mission</h2>
                        <p className="text-blue-700 mb-6">At health grades, we take the guesswork out of finding the right doctors and care for you and your family.</p>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex flex-row"><span>Continue as Patient</span><span><FaUserDoctor className=' mt-4'/></span></button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex flex-row"> <span>Continue as Docotor</span><span><FaUserDoctor className=' mt-4'/></span></button>
                        </div>
                    </div>
                </div>
            </main>
        </body>
        <div className=' h-screen w-full flex justify-center items-center'>
          <h1 className=' h-4'>image</h1>
        </div>
      </div>
    </div>
  )
}

export default Home

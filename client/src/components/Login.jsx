import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom'
import { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(()=> {
    const token = localStorage.getItem('token')
    if(token) {
      navigate('/patien-book')
    }
  })
  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password
      })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/patien-book')
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    
    <div className=' flex h-screen w-screen items-center p-4 bg-[#16202a]'>
      <Link to={"/"}>
      <button className="fixed top-0 left-0 mt-4 mr-4 px-6 py-4  text-white bg-transparent rounded-full font-semibold text-lg overflow-hidden transition-all duration-250 hover:text-blue-500 hover:before:w-full">
        <IoArrowBack className=' size-[30px]'></IoArrowBack>
      </button>   
      </Link>
      
      {/* <body className="bg-zinc-900 text-white min-h-screen flex items-center justify-center"/> */}
            <div className="w-full max-w-lg p-8 space-y-6 rounded-lg shadow-lg text-white bg-[#16202a]">
                <h1 className="text-4xl font-bold">Welcome Back !</h1>
                <p className="text-zinc-400"> Lorem ipsum dolor sit amet.</p>
                <div>
                    <label  htmlFor="email" className="block text-sm font-medium text-zinc-300">Email*</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="mail@website.com" onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password*</label>
                    <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Min. 8 character" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmit}  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Login
                </button>
                <p className="text-xs text-zinc-400 text-center">Have't registered yet ? <Link className=' text-blue-500' to={"/register"}>click here to Register as Patient</Link></p>
            </div>
    </div>
  )
}

export default Login

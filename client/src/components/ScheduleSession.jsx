import axios from "axios"
import { useEffect, useState } from "react"
export const ScheduledSession = () => {
    const [session, setSession] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/api/user/getallappointmentsTodayDate", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                setSession(res.data.patinet)
                localStorage.setItem('session', JSON.stringify(res.data.patinet))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (<div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-2 ">
                <div className=" flex flex-col">
                    <span>Today's Date : </span>
                </div>
                <div>
                {new Date().toLocaleDateString()}
                </div>
            </div>
        </div>
        {session.map((session , index) => {
            return <div key={index} className="bg-white p-5 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Test Session</h2>
                <div className="mb-4">
                    <div className="font-semibold">Appointment Number  :  {session._id}</div>
                    <div className="font-semibold">Doctor Name :  {session.doctorName}</div>
                    <div className="font-semibold">Patient Name :  {session.patientName}</div>
                    <div className="font-semibold">Patient problem :  {session.problem}</div>
                    <div className="font-semibold">scheduleDate  :  {session.scheduleDate}</div>
                    <div className="font-semibold">scheduleTime  :  {session.scheduleTime}</div>
                </div>
            </div>
        })}
    </div>)
}
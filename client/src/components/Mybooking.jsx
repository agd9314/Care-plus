import { useEffect , useState } from "react";
import axios from "axios";

export const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect( ()=>{
        axios.get("http://localhost:3000/api/user/getallappointments", {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setBookings(res.data.patinet)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return <div>
        <body className="bg-zinc-100 p-4 grid grid-cols-3 items-center gap-4">

            {bookings.map((booking , index)=>{
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
                                    <div className="text-sm">Patient Email: <span className="font-semibold">{booking.
                                        patientEmail }</span></div>
                                    <div className="text-sm">Patient Phone: <span className="font-semibold">{booking.
                                        patientPhone }</span></div>
                                    <div className="text-sm">Patient Problem: <span className="font-semibold">{booking.
                                        problem }</span></div>
                                    <div className="text-sm">Booking Satus: <span className="font-semibold">{booking.
                                        status }</span></div>
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

        </body>

    </div>
}
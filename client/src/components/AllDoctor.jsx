import { useState , useEffect } from "react"
import axios from "axios"
import { DoctorCard } from "./DoctorCard"
export const AllDoctors = () => {
    const [doctors , setDoctors] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3000/api/user/getalldoctor" , {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((res)=>{
            setDoctors(res.data.doctor)
        })
        .catch((err)=>{
            console.log(err)
        })
    } , [])
    return <div className="p-4">
        <div className="grid grid-cols-4 gap-4 items-center">
            {doctors.map((doctor , index)=> <DoctorCard key={index} doctor={doctor}/>)}
        </div>
    </div>
}
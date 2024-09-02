import { Router } from "express";
import { DoctorCreate, DoctorLogin,cancelAppointment  } from "../controllers/doctorController.js";
import jwtVerify from "../middleware/jwtVerify.js";
// import { Docgetallappointments, getallappointmentsTodayDate, getallappointmentscancel, getallappointmentsconfirm, getallappointmentspending } from "../controllers/appointcontroller.js";
// import { DoctorCreate, DoctorLogin, cancelAppointment } from "./controllers/doctorController.js";
const Doctoroutes = Router();


Doctoroutes.post("/register", DoctorCreate);
Doctoroutes.post("/login",DoctorLogin);
Doctoroutes.patch('/appointments/:id/cancel', cancelAppointment);

// Doctoroutes.delete("/appointmentdelete",Doctor);

// Doctoroutes.get("/getallappointments",jwtVerify,Docgetallappointments);
// Doctoroutes.get("/getallappointmentsconfirm",jwtVerify,getallappointmentsconfirm);
// Doctoroutes.get("/getallpendingappointments",jwtVerify,getallappointmentspending);
// Doctoroutes.get("/getallappointmentscancel",jwtVerify,getallappointmentscancel);
// Doctoroutes.get("/getallappointmentsTodayDate",jwtVerify,getallappointmentsTodayDate);

export default Doctoroutes;

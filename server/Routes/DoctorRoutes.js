import { Router } from "express";
import { DoctorCreate, DoctorLogin } from "../controllers/doctorController.js";
import jwtVerify from "../middleware/jwtVerify.js";
import { Docgetallappointments, getallappointmentsTodayDate, getallappointmentscancel, getallappointmentsconfirm, getallappointmentspending } from "../controllers/appointcontroller.js";

const Doctoroutes = Router();


Doctoroutes.post("/register", DoctorCreate);
Doctoroutes.post("/login",DoctorLogin);
Doctoroutes.get("/getallappointments",jwtVerify,Docgetallappointments);
Doctoroutes.get("/getallappointmentsconfirm",jwtVerify,getallappointmentsconfirm);
Doctoroutes.get("/getallpendingappointments",jwtVerify,getallappointmentspending);
Doctoroutes.get("/getallappointmentscancel",jwtVerify,getallappointmentscancel);
Doctoroutes.get("/getallappointmentsTodayDate",jwtVerify,getallappointmentsTodayDate);

export default Doctoroutes;
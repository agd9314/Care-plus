import { Router } from "express";
import { createUser, getallDoctor, loginUser } from "../controllers/UserControllers.js";
import { createAppointment, getallappointments, getallappointmentsTodayDate, getallappointmentscancel, getallappointmentsconfirm, getallappointmentspending, updateConfrimAppointment } from "../controllers/appointcontroller.js";
import jwtVerify from "../middleware/jwtVerify.js";



const userRoutes = Router();



userRoutes.post("/register", createUser );
userRoutes.post("/login",loginUser);
userRoutes.post("/bookappointment", jwtVerify, createAppointment);
userRoutes.get("/getalldoctor", jwtVerify, getallDoctor);
userRoutes.get("/getallappointments", jwtVerify, getallappointments);
userRoutes.get(
  "/getallappointmentsconfirm",
  jwtVerify,
  getallappointmentsconfirm
);
userRoutes.get(
  "/getallpendingappointments",
  jwtVerify,
  getallappointmentspending
);
userRoutes.get(
  "/getallappointmentscancel",
  jwtVerify,
  getallappointmentscancel
);
userRoutes.put("/updateappointment", jwtVerify, updateConfrimAppointment);
userRoutes.get("/getallappointmentsTodayDate", jwtVerify, getallappointmentsTodayDate);



export default userRoutes;
import { Router } from "express";
import { createUser, getallDoctor, loginUser } from "../controllers/UserControllers.js";
import { createAppointment, getallappointmentscancel, getallappointmentsconfirm, getallappointmentspending } from "../controllers/appointcontroller.js";
import jwtVerify from "../middleware/jwtVerify.js";



const userRoutes = Router();



userRoutes.post("/register", createUser );
userRoutes.post("/login",loginUser);
userRoutes.post("/bookappointment", jwtVerify, createAppointment);
userRoutes.get("/getalldoctor", jwtVerify, getallDoctor);
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



export default userRoutes;
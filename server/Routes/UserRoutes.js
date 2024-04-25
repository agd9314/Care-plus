import { Router } from "express";
import { createUser, loginUser } from "../controllers/UserControllers";



const userRoutes = Router();



userRoutes.post("/register", createUser );
userRoutes.post("/login",loginUser);



export default userRoutes;
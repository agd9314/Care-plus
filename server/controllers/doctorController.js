import DoctorModel from "../models/docterModel.js";
import AppointmentModel from "../models/appointment.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const DoctorCreate = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    age,
    gender,
    specialization,
    experience,
    degree,
    address,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !phone ||
    !age ||
    !gender ||
    !specialization ||
    !experience ||
    !degree ||
    !address
  ) {
    return res.status(422).json({ message: "Please fill all the fields" });
  }

  try {
    const doctorExist = await DoctorModel.findOne({
      email,
    });

    if (doctorExist) {
      return res.status(422).json({ message: "Doctor already exists" });
    }

    const doctor = new DoctorModel({
      name,
      email,
      password,
      phone,
      gender,
      specialization,
      experience,
      degree,
      address,
    });
    await doctor.save();
    res.status(200).json({ message: "Doctor registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while creating doctor" });
  }
};

export const DoctorLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ message: "Please fill all the fields" });
  }

  try {
    const doctorExist = await DoctorModel.findOne({
      email,
      password,
    });

    if (!doctorExist) {
      return res.status(422).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: doctorExist._id }, process.env.JWT_SECRET);

    return res.status(200).json({
      message: "Doctor logged in successfully",
      token: token,
      doctor: {
        id: doctorExist._id,
        email: doctorExist.email,
        name: doctorExist.name,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while logging in doctor" });
  }
};

export const cancelAppointment = async (req, res) => {
  const { id } = req.params; // Assuming you're passing the appointment ID in the URL as a route parameter

  try {
    const appointment = await AppointmentModel.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Update the status to "cancelled"
    appointment.status = "cancelled";
    await appointment.save();

    res.status(200).json({ message: "Appointment status updated to cancelled successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error while cancelling the appointment" });
  }
};

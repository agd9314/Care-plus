import AppointmentModel from "../models/appointment.js";
import dotenv from "dotenv";
dotenv.config();


export const createAppointment = async (req , res) =>{
    const {
      patientName,
      patientEmail,
      patientPhone,
      patientAge,
      problem,
      scheduleDate,
      scheduleTime,
      doctorName,
      doctorId,
    } = req.body;
    const userId = req.user.id;
    if(!patientName || !patientEmail || !patientPhone || !patientAge || !problem || !scheduleDate || !scheduleTime || !doctorName || !doctorId){
        return res.status(422).json({message : "Please fill all the fields"});
    }

    try {
        const appointment = new AppointmentModel({
          patientName,
          patientEmail,
          patientPhone,
          patientAge,
          problem,
          scheduleDate,
          scheduleTime,
          doctorName,
          doctorId,
          userId,
          status : "pending",
        });
        await appointment.save();
        res.status(200).json({message : "Appointment booked successfully"});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: " error while booking appointment" });
    }



}

export const getallappointments = async (req, res) => {
  try {
    const patinet = await AppointmentModel.find();
    res.status(200).json({ patinet });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: " error while fetching patients" });
  }
};
export const getallappointmentsconfirm = async (req, res) => {
  try {
    const patinet = await AppointmentModel.find({confirmStatus : true});
    res.status(200).json({ patinet });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: " error while fetching confirmed patients" });
  }
};

export const getallappointmentspending = async (req, res) => {
  try {
    const patinet = await AppointmentModel.find({confirmStatus : false});
    res.status(200).json({ patinet });
    } catch (error) {
    console.log(error);
    return res.status(500).json({ message: " error while fetching pending patients" });
    }
}
export const getallappointmentscancel = async (req, res) => {
  try {
    const patinet = await AppointmentModel.find({ status: "cancelled" });
    res.status(200).json({ patinet });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: " error while fetching cancelled patients" });
  }
};

export const getallappointmentsTodayDate = async (req, res) => {
    try {
        console.log(new Date().toLocaleDateString());
        const patinet = await AppointmentModel.find({ scheduleDate: new Date().toLocaleDateString() });
        res.status(200).json({ patinet });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: " error while fetching patients" });
    }
}
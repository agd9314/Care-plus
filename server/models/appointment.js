import mongoose from "mongoose";


const appointmentSchema = mongoose.Schema({
    patientName : {
        type: String,
        required: true
    },
    patientEmail : {
        type: String,
        required: true,
        unique: true
    },
    patientPhone : {
        type: Number,
        required: true
    },
    patientAge : {
        type: Number,
        required: true
    },
    problem : {
        type: String,
        required: true
    },
    bookedDate : {
        type: Date,
        required: true
    },
    bookedTime : {
        type: String,
        required: true
    },
    scheduleDate : {
        type: Date,
        required: true
    },
    scheduleTime : {
        type: String,
        required: true
    },
    doctorName : {
        type: String,
        required: true
    },
    doctorId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
})

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);
export default AppointmentModel;

import mongoose from "mongoose";


const appointmentSchema = mongoose.Schema({
    patientName : {
        type: String,
        required: true
    },
    patientEmail : {
        type: String,
        required: true,
    },
    patientPhone : {
        type: Number,
        required: true
    },
    patientAge : {
        type: Number,
        required: true
    },22
    problem : {
        type: String,
        required: true
    },
    conformStatus : {
        type: Boolean,
        default : false
    },
    status : {
        type : String,
        enum : ["confirm", "pending" , "cancelled"],
    },
    bookedDate : {
        type: String,
        default : new Date().toLocaleDateString(),
    },
    bookedTime : {
        type: String,
        default : new Date().toLocaleTimeString()
    },
    scheduleDate : {
        type: String,
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

import mongoose from "mongoose";

export const doctorSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    phone : {
        type: Number,
        required: true
    },
    gender : {
        type : String,
        required: true,
        enum : ["male" , "female" , "other"]
    },
    specialization : {
        type: String,
        required: true
    },
    experience : {
        type: Number,
        required: true
    },
    degree : {
        type: String,
        required: true
    },
    address : {
        type : String
    }
})

const DoctorModel = mongoose.model('Doctor', doctorSchema);

export default DoctorModel;
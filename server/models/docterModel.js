import mongoose from "mongoose";

export const doctorSchema = mongoose.Schema({
    name : {
        type: String,
        
    },
    email : {
        type: String,
        
    },
    password : {
        type: String,
        
    },
    phone : {
        type: Number,
        
    },
    gender : {
        type : String,
        
        enum : ["male" , "female" , "other"]
    },
    specialization : {
        type: String,
        
    },
    experience : {
        type: Number,
        
    },
    degree : {
        type: String,
        
    },
    address : {
        type : String
    }
})

const DoctorModel = mongoose.model('Doctor', doctorSchema);

export default DoctorModel;
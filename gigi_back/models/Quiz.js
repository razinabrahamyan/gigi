import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Quiz = mongoose.model("Quiz", new Schema({
        username: {
             type: String, 
             required: true,
             unique:true
        }
            ,
        role: {type: String, required: true,},
        questions: {},
    },
    {
        timestamps: true,
    }
));

export default Quiz;
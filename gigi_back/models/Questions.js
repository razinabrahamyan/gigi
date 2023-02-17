import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Questions = mongoose.model("Questions", new Schema({
        role: {type: Schema.Types.Array},
        text: {type: String},
        description:{type: String, null: true},
        order: {type: Number},
        type: {type: String},
        value:{type: Number},
        name: {type: String}

    },
    {
        timestamps: true,
    }
));

export default Questions;   
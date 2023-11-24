const mongoose = require("mongoose");

const qSchema = new mongoose.Schema({
    ques: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    score: {
        type: String,
        required: true,
    },
    addedBy: {
        type: String,
    },
})

const Ques = mongoose.model("Ques", qSchema);

module.exports = Ques;
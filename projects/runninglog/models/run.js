const mongoose = require ("mongoose");
const {Schema} = mongoose;

const runSchema = new Schema({
    date: {
        required: true,
        type: String
    },
    distance: String,
    time: String,
    type: String
})

const RunModel = mongoose.model("runs", runSchema);
module.exports = RunModel;
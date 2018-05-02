const mongoose = require ("mongoose");
const {Schema} = mongoose;

const catSchema = new Schema({ /*creating an instance; it's an object*/
    name: String,
    breed: {
        required: Boolean,
        value: String
    },
    age: Number,
    adoptionStatus: {
        type: String,
        default: "not adopted"
    },
    agencyId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "agencies"/**needs to match the model name */
    }
})

const CatModel = mongoose.model("cats" /*name of collection; has nothing to do with names of routes in other files!*/, catSchema);
module.exports = CatModel;
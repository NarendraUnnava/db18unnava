const mongoose = require("mongoose")
const gasSchema = mongoose.Schema({
    gas_type: String,
    quantity: Number,
    cost: Number
})
module.exports = mongoose.model("Gas",
    gasSchema)
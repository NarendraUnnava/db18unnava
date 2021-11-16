const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    manufacturer: String,
    model: String,
    cost: Number
})
module.exports = mongoose.model("Car",
    carSchema)
const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    manufacturer: String,
    model: {type:String,length:15},
    cost: {type:Number,min:1000,max:100000}
})
module.exports = mongoose.model("Car",
    carSchema)
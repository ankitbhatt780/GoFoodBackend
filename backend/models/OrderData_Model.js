const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const OrderSchema = new Schema({

    email: {
        type: String,
        // required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },
})
const OrderModel = model("orders", OrderSchema)
module.exports = OrderModel;




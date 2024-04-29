const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now(),
    },


}, {
    timestamps: true
})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel;


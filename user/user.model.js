const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    phoneNo: { type: String },
    emailId: { type: String, unique: true },
    address: { type: String },
    country: { type: String },
    dob: { type: Date }
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
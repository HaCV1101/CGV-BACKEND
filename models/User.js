const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
    },

    password: {
        type: String,
        minLength: 8,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },
})


UserSchema.methods.checkPassword = function (password) {
    // return bcrypt.compareSync(password, this.password);
    return password === this.password;
};

UserSchema.methods.genToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
};





module.exports = mongoose.model("user", UserSchema);

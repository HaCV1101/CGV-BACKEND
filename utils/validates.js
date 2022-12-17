const validator = require("validator");
function validateEmail(email = "") {
    return validator.isEmail(email) ? false : "Email is invalid";
}
function validatePassword(password = "") {
    return validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
    })
        ? false
        : "Password is too short (password length must be more than 8 characters)";
}



module.exports = {
    validateEmail,
    validatePassword,
}
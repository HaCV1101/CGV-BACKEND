const User = require("../models/User");
const { validatePassword, validateEmail } = require("../utils/validates");

class authController {
  async login(req = new Request(), res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Email and password are required",
      });
    }
    let validateErr = validateEmail(email) || validatePassword(password);
    if (validateErr) {
      return res.status(400).json({ status: "error", message: validateErr });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ status: "error", message: "User does not exist" });
      }
      if (!user.checkPassword(password)) {
        return res
          .status(400)
          .json({ status: "error", message: "Password is incorrect" });
      }
      return res.status(200).json({
        status: "success",
        data: { user },
      });
    } catch (error) {
      return res.status(503).json({
        status: "error",
        message: "Service error. Please try again later",
      });
    }
  }

  async signup(req = new Request(), res) {
    const { email, password, name, phone } = req.body;
    if (!email || !password || !name || !phone) {
      return res.status(400).json({
        status: "error",
        message: "Email, password, name and phone are required",
      });
    }
    let validateErr = validateEmail(email) || validatePassword(password);
    if (validateErr) {
      return res.status(400).json({ status: "error", message: validateErr });
    }
    try {
      const user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ status: "error", message: "User already exists" });
      }
      const newUser = new User({ email, password, name, phone });
      await newUser.save();
      return res.status(200).json({
        status: "success",
        data: { user: newUser },
      });
    } catch (error) {
      return res.status(503).json({
        status: "error",
        message: "Service error. Please try again later",
      });
    }
  }
}

module.exports = new authController();

const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;
async function connect() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect fail!!!");
  }
}

module.exports = { connect };

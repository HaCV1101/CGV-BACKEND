const MovieNowShowing = require("../models/MovieNowShowing");
const MovieComingSoon = require("../models/MovieComingSoon");

class movieController {
  async getMoviesNowShowing(req = new Request(), res) {
    try {
      const moviesNowShowing = await MovieNowShowing.find({});
      return res.status(200).json({
        status: "success",
        data: { moviesNowShowing },
      });
    } catch (error) {
      return res.status(503).json({
        status: "error",
        message: "Service error. Please try again later",
      });
    }
  }

  async getMoviesComingSoon(req = new Request(), res) {
    try {
      const moviesComingSoon = await MovieComingSoon.find({});
      console.log(moviesComingSoon);
      return res.status(200).json({
        status: "success",
        data: { moviesComingSoon },
      });
    } catch (error) {
      return res.status(503).json({
        status: "error",
        message: "Service error. Please try again later",
      });
    }
  }
}

module.exports = new movieController();

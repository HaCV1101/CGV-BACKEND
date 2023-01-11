const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/now-showing", movieController.getMoviesNowShowing);
router.get("/coming-soon", movieController.getMoviesComingSoon);

module.exports = router;

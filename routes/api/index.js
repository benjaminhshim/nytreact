const router = require("express").Router();
const articlesRoutes = require("./articles");
const videosRoutes = require('./videos');

// Book routes
router.use("/articles", articlesRoutes);
router.use('/videos', videosRoutes);

module.exports = router;

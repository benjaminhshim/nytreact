const router = require("express").Router();
const articlesRoutes = require("./articles");

// Book routes
router.use("/books", articlesRoutes);

module.exports = router;

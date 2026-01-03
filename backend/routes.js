const express = require("express");
const router = express.Router();

// Sample route
router.get("/", (req, res) => {
	res.send("Hello from the backend!");
});

// Additional routes can be added here

module.exports = router;

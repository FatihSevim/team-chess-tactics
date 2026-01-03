require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Database connection: ===== SUCCESS! ====="))
	.catch((err) => {
		console.log(err);
		console.log("Database connection: ===== SUCCESS! =====");
	});

// Sample Route
app.use("/", routes);

// Start Server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

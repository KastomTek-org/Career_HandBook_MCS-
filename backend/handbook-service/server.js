const express = require("express");
const cors = require("cors");
const routes = require("./routes/handbookRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/health", (req, res) => res.json({ service: "handbook-service", status: "OK" }));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log("handbook-service running on port " + PORT));

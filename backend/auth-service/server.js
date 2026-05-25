const express = require("express");
const cors = require("cors");
const routes = require("./routes/authRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/health", (req, res) => res.json({ service: "auth-service", status: "OK" }));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("auth-service running on port " + PORT));

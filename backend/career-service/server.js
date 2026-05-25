const express = require("express");
const cors = require("cors");
const routes = require("./routes/careerRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/health", (req, res) => res.json({ service: "career-service", status: "OK" }));

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => console.log("career-service running on port " + PORT));

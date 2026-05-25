const express = require("express");
const cors = require("cors");
const routes = require("./routes/curriculumRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/health", (req, res) => res.json({ service: "curriculum-service", status: "OK" }));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log("curriculum-service running on port " + PORT));

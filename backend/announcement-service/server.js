const express = require("express");
const cors = require("cors");
const routes = require("./routes/announcementRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/health", (req, res) => res.json({ service: "announcement-service", status: "OK" }));

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log("announcement-service running on port " + PORT));

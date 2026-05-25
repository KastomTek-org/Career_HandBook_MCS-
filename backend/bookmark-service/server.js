const express = require("express");
const cors = require("cors");
const routes = require("./routes/bookmarkRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/health", (req, res) => res.json({ service: "bookmark-service", status: "OK" }));

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => console.log("bookmark-service running on port " + PORT));

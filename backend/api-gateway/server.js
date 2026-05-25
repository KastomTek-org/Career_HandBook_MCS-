const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());

const services = {
  "/api/auth": process.env.AUTH_SERVICE_URL || "http://localhost:5001",
  "/api/handbook": process.env.HANDBOOK_SERVICE_URL || "http://localhost:5002",
  "/api/curriculum": process.env.CURRICULUM_SERVICE_URL || "http://localhost:5003",
  "/api/careers": process.env.CAREER_SERVICE_URL || "http://localhost:5004",
  "/api/announcements": process.env.ANNOUNCEMENT_SERVICE_URL || "http://localhost:5005",
  "/api/bookmarks": process.env.BOOKMARK_SERVICE_URL || "http://localhost:5006",
};

Object.entries(services).forEach(([route, target]) => {
  app.use(route, createProxyMiddleware({ target, changeOrigin: true, pathRewrite: { [`^${route}`]: "" } }));
});

app.get("/health", (req, res) => res.json({ service: "api-gateway", status: "OK", services }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("api-gateway running on port " + PORT));

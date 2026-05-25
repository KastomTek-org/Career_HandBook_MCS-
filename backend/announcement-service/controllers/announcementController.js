let announcements = require("../models/Announcement");
exports.getAnnouncements = (req, res) => res.json(announcements);
exports.createAnnouncement = (req, res) => {
  const announcement = { id: Date.now(), date: new Date().toISOString().slice(0, 10), ...req.body };
  announcements.unshift(announcement);
  res.status(201).json(announcement);
};

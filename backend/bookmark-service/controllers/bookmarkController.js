let bookmarks = require("../models/Bookmark");
exports.getBookmarks = (req, res) => res.json(bookmarks);
exports.toggleBookmark = (req, res) => {
  const { unitCode } = req.body;
  if (!unitCode) return res.status(400).json({ message: "unitCode is required" });
  bookmarks = bookmarks.includes(unitCode)
    ? bookmarks.filter((code) => code !== unitCode)
    : [...bookmarks, unitCode];
  res.json(bookmarks);
};

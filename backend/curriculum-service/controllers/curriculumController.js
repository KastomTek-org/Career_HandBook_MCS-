let units = require("../models/Unit");
exports.getUnits = (req, res) => res.json(units);
exports.getUnitById = (req, res) => {
  const unit = units.find((u) => u.id === Number(req.params.id));
  if (!unit) return res.status(404).json({ message: "Unit not found" });
  res.json(unit);
};
exports.createUnit = (req, res) => {
  const unit = { id: Date.now(), ...req.body };
  units.push(unit);
  res.status(201).json(unit);
};
exports.updateUnit = (req, res) => {
  units = units.map((u) => u.id === Number(req.params.id) ? { ...u, ...req.body } : u);
  res.json(units.find((u) => u.id === Number(req.params.id)));
};

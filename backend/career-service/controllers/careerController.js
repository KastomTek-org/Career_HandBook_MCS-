let careers = require("../models/Career");
exports.getCareers = (req, res) => res.json(careers);
exports.createCareer = (req, res) => {
  const career = { id: Date.now(), ...req.body };
  careers.push(career);
  res.status(201).json(career);
};

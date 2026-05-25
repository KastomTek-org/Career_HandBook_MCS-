const { program, entryRequirements } = require("../models/Program");
exports.getProgram = (req, res) => res.json(program);
exports.getEntryRequirements = (req, res) => res.json(entryRequirements);
exports.updateProgram = (req, res) => res.json({ ...program, ...req.body });

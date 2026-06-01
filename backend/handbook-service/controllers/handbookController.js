const Program=require('../models/ProgramModel'); exports.getProgram=(req,res)=>res.json(Program.get()); exports.updateProgram=(req,res)=>res.json(Program.save({...Program.get(),...req.body}));

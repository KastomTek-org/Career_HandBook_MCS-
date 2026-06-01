const Career=require('../models/CareerModel'); exports.getCareers=(req,res)=>res.json(Career.all()); exports.createCareer=(req,res)=>res.status(201).json(Career.create(req.body));

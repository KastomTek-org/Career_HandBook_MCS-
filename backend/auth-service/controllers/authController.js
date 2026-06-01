const jwt=require('jsonwebtoken'); const users=require('../models/User');
exports.login=(req,res)=>{ const {email,password}=req.body; const user=users.find(u=>u.email===email && u.password===password); if(!user) return res.status(401).json({message:'Invalid login'}); const token=jwt.sign({id:user.id,email:user.email,role:user.role}, process.env.JWT_SECRET||'mcs_secret_key',{expiresIn:'1d'}); res.json({token,user:{id:user.id,name:user.name,email:user.email,role:user.role}}); };
exports.me=(req,res)=>res.json(req.user);

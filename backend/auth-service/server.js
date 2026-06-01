require('dotenv').config(); const express=require('express'); const cors=require('cors'); const authRoutes=require('./routes/authRoutes');
const app=express(); app.use(cors()); app.use(express.json()); app.use('/api/auth', authRoutes); app.get('/health',(req,res)=>res.json({service:'auth',status:'ok'}));
app.listen(process.env.PORT||5001,()=>console.log('Auth service running'));

const router=require('express').Router(); const c=require('../controllers/handbookController'); router.get('/program',c.getProgram); router.put('/program',c.updateProgram); module.exports=router;

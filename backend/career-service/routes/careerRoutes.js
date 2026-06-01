const router=require('express').Router(); const c=require('../controllers/careerController'); router.get('/',c.getCareers); router.post('/',c.createCareer); module.exports=router;

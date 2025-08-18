const express= require ('express');
const { home, about } = require('../Module/module');
const router= express.Router();


 router.route('/').post(home);
 router.route('/about').post(about);

 module.exports=router;
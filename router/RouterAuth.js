const express= require ('express');
const { home, about } = require('../Module/module');
const router= express.Router();


 router.route('/').get(home);
 router.route('/about').get(about);

 module.exports=router;
const express = require('express');

const homeController = require('../controllers/home_controller');
const router = express.Router();

router.get('/',homeController.home);
console.log("Page is imported");
module.exports = router;
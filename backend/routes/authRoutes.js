const express = require('express')
const router = express.Router();


const authController = require('../controllers/authController')
// Just used to note all possible routes for authentication for proper redirecting
router.route('/signin').post(authController.signin)

router.route('/register').post(authController.register)

module.exports = router;

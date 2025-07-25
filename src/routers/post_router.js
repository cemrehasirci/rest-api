const express = require('express');
const { getCourse } = require('../controllers/course_controller.js');
const auth = require('../middleware/auth_middleware.js')
const router = express.Router();

router.get('/getCourse', getCourse);


module.exports = router
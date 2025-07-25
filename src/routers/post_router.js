const express = require('express');
const { getCourse, createCourse, updateCourse, deleteCourse} = require('../controllers/course_controller.js');
//const auth = require('../middleware/auth_middleware.js')
const router = express.Router();

router.get('/getCourse', getCourse);
router.post('/createCourse', createCourse);
router.patch('/updateCourse/:id', updateCourse);
router.delete('/deleteCourse/:id', deleteCourse)

module.exports = router
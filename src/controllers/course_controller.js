const CourseSchema = require('../models/course.js')

const getCourse = async (req, res) => {
    try {
        const getCours = await CourseSchema.find(req.body);
        if (getCours == "") {
            return res.status(500).json({message: "Henüz bir kursumuz nbulunmamakta..."})
        }
        res.status(200).json({getCours});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};








module.exports = { getCourse }

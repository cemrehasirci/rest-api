const CourseSchema = require('../models/course.js')

const getCourse = async (req, res) => {
    try {
        const getCourse = await CourseSchema.find(req.body);
        if (getCourse == "") {
            return res.status(500).json({message: "Henüz bir kursumuz nbulunmamakta..."})
        }
        res.status(200).json({getCourse});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = await CourseSchema.create(req.body);
    res.status(201).json({
      newCourse,
    });
  } catch (error) {
    return res.status(500).json({ message: "Course oluşturulamadı!" });
  }
};

const updateCourse = async (req, res) => {
    try {
    const { id } = req.params;
    const updateCourse = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      updateCourse,
    });
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await CourseSchema.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course bulunamadı" });
    }
    res.status(201).json({
      message: `${deletedCourse.id} id'li course başarıyla silindii...`,
    });
  } catch {
    return res.status(500).json({ message: error.message });
  }
};









module.exports = { getCourse, createCourse, updateCourse, deleteCourse}

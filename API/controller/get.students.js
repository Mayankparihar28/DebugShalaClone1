import studentSchemaModel from "../module/module.student.js";

const getStudents = async (req, res) => {
  try {
    const students = await studentSchemaModel.find({});
    res.status(200).json({
      success: true,
      data: students,
      message: "Entire Students Data is fetched",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};

export default getStudents;

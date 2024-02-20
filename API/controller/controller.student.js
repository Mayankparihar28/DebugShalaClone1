import studentSchemaModel from "../module/module.student.js";

const createStudent = async (req, res) => {
  try {
    const { name, email, mobile, background } = req.body; // Corrected "eamil" to "email"
    console.log(name, email, mobile, background);
    const response = await studentSchemaModel.create({
      name,
      email,
      mobile,
      background,
    }); // Corrected "eamil" to "email"
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

export default createStudent;
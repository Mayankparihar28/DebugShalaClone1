import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,

  name: {
    required: ["name is require"],
    type: String,
  },
  email: {
    required: ["name is require"],
    trim: true,
    type: String,
  },
  mobile: {
    required: ["name is require"],
    trim: true,
    maxlength: 10,
    minlengthl: 10,
    type: Number,
  },
  background: {
    type: String,
  },
});

const studentSchemaModel = mongoose.model("student", studentSchema);
export default studentSchemaModel;

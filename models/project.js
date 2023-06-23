import { Schema, model, models } from "mongoose";
const projectSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
  },
  appliedstudent: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
  skillexperience: {
    type: Object,
  },
  description: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  domain: {
     type: Object, 
    required: true 
  },
});

const Project = models.Project || model("Project", projectSchema);

export default Project;

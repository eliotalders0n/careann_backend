import mongoose from "mongoose";
import bcrypt from "bcrypt";

const careNeedsSchema = mongoose.Schema(
  {
    type_of_care: { type: String, required: false },
    frequency: { type: String, required: false },
    goals: { type: String, required: false },
  },
  {
    timestamps: false,
  }
);

const socialSchema = mongoose.Schema(
  {
    language: { type: String, required: false },
    religion: { type: String, required: false },
    race: { type: String, required: false },
  },
  {
    timestamps: false,
  }
);

const healthStatusSchema = mongoose.Schema(
  {
    currentMedication: { type: String, required: false },
    allergies: {  type: String, required: false },
    chronicCondtion: { type: String, required: false },
    disability: { type: String, default: 0, required: false },
  },
  {
    timestamps: false,
  }
);

const userSchema = mongoose.Schema(
  {
    fid: { type: String, required: true, unique: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    age: { type: String, required: false },
    phone: { type: String, required: false },
    address: { type: String, required: false },
    gender: { type: String, required: false },
    image: { type: String, required: false },
    images: [String],
    emergency_contact: { type: String, required: false },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false },
    care_needs: [careNeedsSchema],
    social: [socialSchema],
    health_status: [healthStatusSchema],
  },
  {
    timestamps: false,
  }
);

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
export default User;

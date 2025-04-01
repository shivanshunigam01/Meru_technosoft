import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "A user must have an email!"],
      unique: true,
      trim: true,
      validate: [validator.isEmail, "Please enter a valid email!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password!"],
      validate: {
        validator: function (value) {
          return value === this.password;
        },
        message: "Password & compare password are not the same",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userModel.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

// * Instance method to compare entered password.
userModel.methods.comparePassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export default mongoose.model("User", userModel);
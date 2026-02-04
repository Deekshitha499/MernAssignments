import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      minLength: [4, "minimum length should be 4"],
      maxLength: [10, "maximum length exceeded"]
    },
    password: {
      type: String,
      required: [true, "password required"]
    },
    age: {
      type: Number,
      required: [true, "age is required"],
      min: [18, "age should be above 18"],
      max: [25, "age should be below 25"]
    }
  },
  {
    strict: "throw",
    timestamps: true
  }
)

export default model('User', userSchema)
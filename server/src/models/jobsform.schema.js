import mongoose, { Schema } from "mongoose";

const jobsmodel = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phoneNumber: { 
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    education: [
      {
        institution: {
          type: String,
          trim: true,
        },
        degree: {
          type: String,
          trim: true,
        },
        year: {
          type: Number,
          min: 1900,
          max: new Date().getFullYear(),
        },
      },
    ],
    experience: [
      {
        company: {
          type: String,
          trim: true,
        },
        position: {
          type: String,
          trim: true,
        },
        duration: {
          type: String,
        },
        description: {
          type: String,
          trim: true,
        },
      },
    ],
    skills: [
      {
        type: String,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const jobsSchema = mongoose.model("JobsForm", jobsmodel);
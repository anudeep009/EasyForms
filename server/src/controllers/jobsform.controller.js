import { jobsSchema } from "../models/jobsform.schema.js";
import { ApiError, ApiResponse, asyncHandler } from "../utils/exports.js";

const getUserData = asyncHandler(async (req, res) => {
  if (!req.user) {
    throw new ApiError(401, "Unauthorized request. Please log in.");
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      education,
      experience,
      skills,
    } = req.body;

   
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !address ||
      !education ||
      education.length === 0 || 
      !experience ||
      experience.length === 0 ||  
      !skills ||
      skills.length === 0  
    ) {
      throw new ApiError(400, "All fields are required.");
    }

    const newJobForm = new jobsSchema({
      userId: req.user._id,
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      education,
      experience,
      skills,
    });

    const savedJobForm = await newJobForm.save();

    return res
      .status(201)
      .json(new ApiResponse(201, savedJobForm, "Form submitted successfully."));
  } catch (error) {
    console.error("Submission Error:", error);
    throw new ApiError(500, "Internal Server Error.");
  }
});

export { getUserData };

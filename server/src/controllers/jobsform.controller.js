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

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !address ||
      !education ||
      education.length === 0 ||  // Ensuring it's not empty
      !experience ||
      experience.length === 0 ||  // Ensuring it's not empty
      !skills ||
      skills.length === 0  // Ensuring it's not empty
    ) {
      throw new ApiError(400, "All fields are required.");
    }

    // Create a new job form document
    const newJobForm = new jobsSchema({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      education,
      experience,
      skills,
    });

    // Save the document to the database
    const savedJobForm = await newJobForm.save();

    // Respond with success message
    return res
      .status(201)
      .json(new ApiResponse(201, savedJobForm, "Form submitted successfully."));
  } catch (error) {
    console.error("Submission Error:", error);  // Log detailed error
    throw new ApiError(500, "Internal Server Error.");
  }
});

export { getUserData };

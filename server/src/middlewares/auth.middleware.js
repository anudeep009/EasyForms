import jwt from "jsonwebtoken";
import { User } from "../models/user.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiErrorHandler.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
    if (!token) {
      console.log("No token provided");
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken?._id) {
      console.log("Invalid token");
      throw new ApiError(401, "Unauthorized request");
    }

    req.user = await User.findById(decodedToken._id).select("-password -refreshToken");

    if (!req.user) {
      console.log("User not found");
      throw new ApiError(401, "Unauthorized request");
    }

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    throw new ApiError(401, error?.message || "Unauthorized request");
  }
});


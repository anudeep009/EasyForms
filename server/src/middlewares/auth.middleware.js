import jwt from "jsonwebtoken";
import { User } from "../models/user.schema.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiErrorHandler.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    // console.log(token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized request");
  }
});

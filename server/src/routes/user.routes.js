import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateAccountDetails,
  getCurrentUser,
  changeCurrentPassword,
  refreshAccessToken,
} from "../controllers/user.controller.js";
import { getUserData } from "../controllers/jobsform.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Logout user
router.post("/logout", verifyJWT, logoutUser);

// Refresh access token
router.post("/refresh-token", refreshAccessToken);

// Get current user details (protected route)
router.get("/me", verifyJWT, getCurrentUser);

// Update account details (protected route)
router.put("/update-account", verifyJWT, updateAccountDetails);

// Change current password (protected route)
router.put("/change-password", verifyJWT, changeCurrentPassword);

// Save data to the backend jobsform information
router.post("/Jobsform", verifyJWT, getUserData);

export default router;

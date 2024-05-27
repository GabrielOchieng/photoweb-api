import express from "express";
import {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/", registerUser);
router.post("/logout", logOutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;

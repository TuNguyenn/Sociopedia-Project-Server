import express from "express";
import { getUser, getUserFriends, addRomoveFriend } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/** READ */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/** UPDATE */
router.patch("/:id/:friendId", verifyToken, addRomoveFriend);

export default router;

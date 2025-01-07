import PostsController from "../controllers/posts.controller.js";
import express from "express";

const router = express.Router();

router.post("/posts", PostsController.createPost);
router.get("/posts", PostsController.getPosts);
router.get("/posts/:postId", PostsController.getPost);

export default router;

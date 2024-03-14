const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments.controller");

router.get("/", commentController.get_all_comments);
router.get("/:id", commentController.get_comment_by_id);
router.post("/", commentController.create_comment);
router.put("/:id", commentController.update_comment);
router.delete("/:id", commentController.delete_comment);

module.exports = router;

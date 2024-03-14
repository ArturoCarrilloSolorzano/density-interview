const asyncHandler = require("express-async-handler");
const Comment = require("../models").Comment;
// Display Author create form on GET.
exports.get_all_comments = asyncHandler(async (req, res, next) => {
  try {
    const comments = await Comment.findAll({
      where: {
        is_deleted: false,
      },
    });
    res.json(comments);
  } catch (error) {
    res.json(error);
  }
});

// Display Author create form on GET.
exports.get_comment_by_id = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const comment = await Comment.findOne({
      where: {
        id: id,
        is_deleted: false,
      },
    });
    console.log({ comment });
    res.json(comment);
  } catch (error) {
    console.log("here");
    res.json(error);
  }
});

// Display Author create form on GET.
exports.create_comment = asyncHandler(async (req, res, next) => {
  const { comment, email } = req.body;
  if (comment === undefined || email === undefined) {
    res.send("Comment or email not supplied");
    return;
  }
  try {
    const newComment = await Comment.create({
      comment,
      email,
      is_deleted: false,
    });

    res.json(newComment);
  } catch (error) {
    res.json(error);
  }
});

// Display Author create form on GET.
exports.update_comment = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { comment } = req.body;
  if (comment === undefined) {
    res.json({ error: "Comment not supplied" });
    return;
  }

  try {
    const commentQuery = await Comment.findOne({
      where: {
        id: id,
        is_deleted: false,
      },
    });

    if (commentQuery.length == 0) {
      res.json({ error: "Comment not found" });
    }

    await commentQuery.update(
      { comment: comment },
      {
        where: {
          id: id,
          is_deleted: false,
        },
      }
    );

    res.json(commentQuery);
  } catch (error) {
    res.json(error);
  }
});

// Display Author create form on GET.
exports.delete_comment = asyncHandler(async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const commentQuery = await Comment.findOne({
      where: {
        id: id,
        is_deleted: false,
      },
    });
    console.log({ commentQuery });
    if (commentQuery == null) {
      res.json({ error: "Comment not found" });
      return;
    }

    await Comment.update(
      { is_deleted: true },
      {
        where: {
          id: id,
          is_deleted: false,
        },
      }
    );

    res.json({ message: "comment deleted" });
  } catch (error) {
    res.json(error);
  }
});

import * as commentsDao from "./comments-dao.js";

const findComments = async (req, res) => {
    const comments = await commentsDao.findAllComments();
    res.json(comments);
}

const findCommentsByPost = async (req, res) => {
    const comments = await commentsDao.findCommentsByPost(req.params.pid);
    res.json(comments);
}

const findCommentsByUser = async (req, res) => {
    const comments = await commentsDao.findCommentsByUser(req.params.uid);
    res.json(comments);
}

const createComment = async (req, res) => {
    const comment = req.body;
    try {
        const insertedComment = await commentsDao.createComment(comment);
        res.json(insertedComment);
    }
    catch (error) {
        res.sendStatus(404);
    }
}

const deleteComment = async (req, res) => {
    const commentToDelete = req.params.cid;
    const status = await commentsDao.deleteComment(commentToDelete);
    res.json(status);
}

const updateComment = async (req, res) => {
    const commentToUpdate = req.params.cid;
    const updates = req.params.body;
    const status = await commentsDao.updateComment(commentToUpdate, updates);
    res.json(status);
}

const CommentsController = (app) => {
    app.get("/api/comments", findComments);
    app.get("/api/comments/posts/:pid", findCommentsByPost);
    app.get("/api/comments/users/:uid", findCommentsByUser);
    app.post("/api/comments", createComment);
    app.put("/api/comments/:cid", updateComment);
    app.delete("/api/comments/:cid", deleteComment);
}

export default CommentsController;
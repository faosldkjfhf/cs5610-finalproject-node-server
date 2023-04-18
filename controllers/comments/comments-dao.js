import commentsModel from "./comments-model.js";

export const findAllComments = () => commentsModel.find();
export const findCommentsByPost = (pid) => commentsModel.find({ postId: pid });
export const findCommentsByUser = (uid) => commentsModel.find({ userId: uid });
export const createComment = (comment) => commentsModel.create(comment);
export const updateComment = (cid, comment) => commentsModel.updateOne({ _id: cid }, { $set: comment });
export const deleteComment = (cid) => commentsModel.deleteOne({ _id: cid });
import postsModel from './posts-model.js';
export const findTuits = () => postsModel.find();
export const createTuit = (post) => postsModel.create(post);
export const deleteTuit = (pid) => postsModel.deleteOne({ _id: pid });
export const updateTuit = (pid, post) => postsModel.updateOne({ _id: pid }, { $set: post })
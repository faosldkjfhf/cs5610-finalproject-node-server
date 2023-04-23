import listsModel from "./lists-model.js";
export const findLists = () => listsModel.find();
export const findListsByUser = (uid) => listsModel.find({ userId: uid });
export const createList = (list) => listsModel.create(list);
export const updateList = (list) => listsModel.updateOne({ _id: list._id }, { $set: list });
export const deletePost = (lid) => listsModel.deleteOne({ _id: lid });
import reviewsModel from "./reviews-model.js";

export const findAllReviews = () => reviewsModel.find();
export const findReviewsByAlbum = (aid) => reviewsModel.find({ albumId: aid });
export const findReviewsByUser = (uid) => reviewsModel.find({ userId: uid });
export const createReview = (review) => reviewsModel.create(review);
export const updateReview = (rid, review) => reviewsModel.updateOne({ _id: rid }, { $set: review });
export const deleteReview = (rid) => reviewsModel.deleteOne({ _id: rid });
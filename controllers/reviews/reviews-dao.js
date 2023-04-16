import reviewsModel from "./reviews-model.js";

export const findAllReviews = () => reviewsModel.find();
export const findReviewsFromUser = (uid) => reviewsModel.find({ userId: uid })
export const createReview = (review) => reviewsModel.create(review);
export const updateReview = (rid, review) => usersModel.updateOne({ _id: rid }, { $set: review });
export const deleteReview = (rid) => usersModel.deleteOne({ _id: rid });
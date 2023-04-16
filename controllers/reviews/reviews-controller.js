import * as reviewsDao from "./reviews-dao.js";

const findReviews = async (req, res) => {
    const reviews = await reviewsDao.findAllReviews();
    res.json(reviews);
}

// const findReviewsFromUser = async (req, res) => {
//     const reviews = await reviewsDao.findReviewsFromUser(req.params.uid);
//     res.json(reviews);
// }

const findReviewsByAlbum = async (req, res) => {
    const reviews = await reviewsDao.findReviewsByAlbum(req.params.aid);
    res.json(reviews);
}

const updateReview = async (req, res) => {
    const reviewIdToUpdate = req.params.rid;
    const updates = req.body;
    const status = await reviewsDao.updateReview(reviewIdToUpdate, updates);
    res.json(status);
}

const deleteReview = async (req, res) => {
    const reviewidToDelete = req.params.rid;
    const status = await postsDao.deletePost(reviewidToDelete);
    res.json(status);
}

const createReview = async (req, res) => {
    const review = req.body;
    const insertedReview = await reviewsDao.createReview(review);
    res.json(insertedReview);
}

const ReviewsController = (app) => {
    app.get('/api/reviews', findReviews);
    // app.get('/api/reviews/:uid', findReviewsFromUser);
    app.get('/api/review/:aid', findReviewsByAlbum);
    app.post('/api/reviews', createReview);
    app.put('/api/reviews/:rid', updateReview);
    app.delete('/api/reviews/:rid', deleteReview);
}

export default ReviewsController;
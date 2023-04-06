import * as postsDao from "./posts-dao.js"

const findPosts = async (req, res) => {
    const posts = await postsDao.findPosts();
    res.json(posts);
}

const createPost = async (req, res) => {

}

const updatePost = async (req, res) => {

}

const deletePost = async (req, res) => {

}

const PostsController = (app) => {
    app.get('/api/posts', findPosts);
    app.post('/api/posts', createPost);
    app.put('/api/posts/:pid', updatePost);
    app.delete('/api/posts/:pid', deletePost);
}

export default PostsController;
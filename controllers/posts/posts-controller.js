import * as postsDao from "./posts-dao.js"

const findPosts = async (req, res) => {
    const posts = await postsDao.findPosts();
    res.json(posts);
}

const findPostsByUser = async (req, res) => {
    const posts = await postsDao.findPostsByUser(req.params.uid);
    res.json(posts);
}

const findPostById = async (req, res) => {
    const post = await postsDao.findPostById(req.params.pid);
    res.json(post);
}

const createPost = async (req, res) => {
    const newPost = req.body;
    newPost.likes = 0;
    newPost.liked = false;
    newPost.reposts = 0;
    newPost.reposted = false;
    newPost.type = "post";
    console.log(newPost);
    const insertedPost = await postsDao.createPost(newPost);
    res.json(insertedPost);
}

const updatePost = async (req, res) => {
    const postIdToUpdate = req.params.pid;
    const updates = req.body;
    const status = await postsDao.updatePost(postIdToUpdate, updates);
    res.json(status);
}

const deletePost = async (req, res) => {
    const postIdToDelete = req.params.pid;
    const status = await postsDao.deletePost(postIdToDelete);
    res.json(status);
}

const PostsController = (app) => {
    app.get('/api/posts', findPosts);
    app.get('/api/posts/post/:pid', findPostById);
    app.get('/api/posts/user/:uid', findPostsByUser);
    app.post('/api/posts', createPost);
    app.put('/api/posts/:pid', updatePost);
    app.delete('/api/posts/:pid', deletePost);
}

export default PostsController;
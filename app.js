import express from "express";
import PostsController from "./controllers/posts/posts-controller";

const app = express();
app.use(cors());
app.use(express.json());

PostsController(app);

app.listen(process.env.PORT || 4000);
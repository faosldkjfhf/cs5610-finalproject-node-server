import express from "express";
import PostsController from "./controllers/posts/posts-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import SessionController from "./session-controller.js";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import CommentsController from "./controllers/comments/comments-controller.js";
import ListsController from "./controllers/lists/lists-controller.js";
dotenv.config();

const app = express();
app.use(express.json());
app.set('trust proxy', 1);

app.use(
    session({
        secret: "asdfasdfasdfasdf",
        resave: false,
        saveUninitialized: true,
        // cookie: { secure: true }, // needs HTTPS
    })
);

app.use(
    cors({
        credentials: true,
        origin: "https://symfolio.co/",
    })
);

PostsController(app);
UsersController(app);
ReviewsController(app);
CommentsController(app);
ListsController(app);
SessionController(app);
const CONNECTION_STRING = process.env.SF_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/symfolio';
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
app.listen(process.env.PORT || 4000);

import express from "express";
import PostsController from "./controllers/posts/posts-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";

const app = express();
app.use(express.json());

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
        origin: "http://localhost:3000",
    })
);

PostsController(app);
UsersController(app);

const CONNECTION_STRING = process.env.SF_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/symfolio';
mongoose.connect(CONNECTION_STRING);
app.listen(process.env.PORT || 4000);

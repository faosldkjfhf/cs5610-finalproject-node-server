import express from "express";
import PostsController from "./controllers/posts/posts-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import SessionController from "./session-controller.js";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
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
        origin: "http://localhost:3000",
    })
);

PostsController(app);
UsersController(app);
SessionController(app);
const CONNECTION_STRING = process.env.SF_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/symfolio';
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
app.listen(process.env.PORT || 4000);

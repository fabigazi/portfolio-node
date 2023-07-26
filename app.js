import express from 'express';
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import session from "express-session";
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";
import CommentsController from './controllers/comments/comments-controller.js';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
//mongoose.connect(CONNECTION_STRING);
mongoose.connect(
  "mongodb+srv://guest:guest@cluster1.eec9mj4.mongodb.net/?retryWrites=true&w=majority"
);

const app = express()
app.use(cors({
  credentials: true,
  origin: ["https://main--comforting-marshmallow-7be5ef.netlify.app", "http://localhost:3000"]
})
)
app.use(
  session({
    secret: 'any string',
    resave: false,
    proxy: true,
    saveUninitialized: true,
    //store: new session.MemoryStore(),
  })
);

app.set('trust proxy', 1)

app.use(express.json());
AuthController(app)
TuitsController(app);
CommentsController(app);
HelloController(app)
UserController(app)

const port = process.env.PORT || 4000;
app.listen(port)
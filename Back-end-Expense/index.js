import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";

const port = 4000;
const app = express();
app.use(express.json());
app.use(cors());

// app.use(yamarrouter)
app.use(userRouter);

app.listen(4000, () => console.log("http://localhost:4000"));
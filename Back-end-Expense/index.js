import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import pg from "pg";

const CONNECTION_STRING =
  "postgresql://baljinnyambayrmaa:mDAV9qQNPvt0@ep-winter-king-a1nt2l3b.ap-southeast-1.aws.neon.tech/leap1D?sslmode=require";

const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const dbInit = async () => {
  await client.connect();
  await createUserTable();
};
dbInit();

const createUserTable = async () => {
    const userTableCreateQuery= `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        age SMALLINT
    )`;
    const result = await client.query(userTableCreateQuery);
    console.log(result);
    client.end()
}

const app = express();

app.get("", async (req, res) => {
  res.send("working");
});

app.use(express.json());
app.use(cors());

// app.use(yamarrouter)
app.use(userRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});

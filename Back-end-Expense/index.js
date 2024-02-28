import express from "express";
import userRouter from "./routes/userRouter.js";
import cors from "cors";
import pg from "pg";

const CONNECTION_STRING =
  "postgresql://baljinnyambayrmaa:mDAV9qQNPvt0@ep-winter-king-a1nt2l3b.ap-southeast-1.aws.neon.tech/leap1D?sslmode=require";

export const Client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

// const dbInit = async () => {
//   await Client.connect();
//   await createUserTable();
//   await recordTableUser();
// };
// dbInit();

const createUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        age SMALLINT
    )`;
  await Client.query(userTableCreateQuery);
};

const recordTableUser = async () => {
  const recordTableQuery = `CREATE TABLE IF NOT EXISTS records(
  id SERIAL PRIMARY KEY,
  userId TEXT,
  amount INT,
  category TEXT,
  date TEXT,
  time TEXT,
  payee TEXT,
  note TEXT,
  expense BOOL
  )`;
  await Client.query(recordTableQuery);
};

const app = express();
app.use(cors());
app.get("", async (req, res) => {
  res.send("working");
});

app.use(express.json());

// app.use(yamarrouter)
app.use(userRouter);

app.listen(4000, () => {
  console.log("http://localhost:4000");
});

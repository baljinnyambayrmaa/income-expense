import { Client } from "/Users/23LP6963/Desktop/income/Back-end-Expense/index.js";

const RecordQuery = async (
  amount,
  category,
  date,
  time,
  payee,
  note,
  expense,
  userId
) => {
  const userRecordQuery = `INSERT INTO records (amount, category, date, time, payee, note, expense, userId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`;

  const recordId = await Client.query(userRecordQuery, [
    amount,
    category,
    date,
    time,
    payee,
    note,
    expense,
    userId,
  ]);
  return recordId;
};
export const recordsUsers = async (req) => {
  const { amount, category, date, time, payee, note, expense, userId } =
    req.body;

  try {
    const records = await RecordQuery(
      amount,
      category,
      date,
      time,
      payee,
      note,
      expense,
      userId
    );
    return records;
  } catch (err) {
    console.log(err);
  }
};

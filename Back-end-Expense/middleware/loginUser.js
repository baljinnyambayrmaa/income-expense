import fs from "fs";
import jwt from "jsonwebtoken";

const userDB = "./models/users.json";
import { compareHash } from "../utils/passwordHash.js";
import { error } from "console";

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send("Please provide email and password");
      return;
    }
    const users = await JSON.parse(fs.readFileSync(userDB, "utf-8"));
    const user = users.find((user) => user.email === email);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const checkPassword = compareHash(password, user.password);
    if (checkPassword) {
      const token = jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET || "defaultSecret",
        { expiresIn: "1d" }
      );
      req.userData = token;
      next();
    } else {
      res.send("invalid email or password");
      return;
    }
  } catch (error) {
    res.send(error.message);
    return;
  }
};




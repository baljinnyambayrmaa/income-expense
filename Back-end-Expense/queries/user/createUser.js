import { error } from "console";
import { makeHash } from "../../utils/passwordHash.js";
import fs from "fs";

const userDB = "./models/users.json";

const date = new Date();

// Date Formatting to yyy-mm-dd
const dateFormatter = Intl.DateTimeFormat("sv-SE");

//Create new User

export const createNewUser = async (req, res) => {
  const { username, email: upEmail, password: upPassword } = req.body;

  //try catch block
  try {
    if (!username || !upEmail || !upPassword) {
      throw new Error("Please fill all the fields");
    }
    // check if password is at least 5 characters long
    if (upPassword.length < 5) {
      console.log("password length");
      throw new Error("Password must be at least 5 characters long");
    }

    //Read user database and put in temporary variable
    const newUserFile = await fs.readFileSync(userDB, "utf-8");
    //Check if user already exists
    const data = JSON.parse(newUserFile);
    if (data.find(({ email }) => email === upEmail)) {
      throw new Error("User already exists");
    }
    // push new user to database
    data.push({
      username,
      email: upEmail,
      password: makeHash(upPassword),
      createdAt: dateFormatter.format(date),
    });
    // write new user to database
    await fs.writeFileSync(userDB, JSON.stringify(data));
    return "User created successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};

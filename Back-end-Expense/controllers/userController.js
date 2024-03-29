import { createNewUser } from "../queries/user/createUser.js";
import { recordsUsers } from "../queries/recordsQuery.js";

//Get Data of logged in user
export const getLoggedInUserService = async (req, res) => {
  try {
    res.status(200);
    res.send(req.userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// create new user
export const createNewUserService = async (req, res) => {
  try {
    const data = await createNewUser(req);
    res.send(JSON.stringify(data));
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const recordsUserController = async (req, res) => {
  try {
    const records = await recordsUsers(req);
    res.json(records);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

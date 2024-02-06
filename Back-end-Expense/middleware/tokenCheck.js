import jwt from "jsonwebtoken";

// export const tokenCheck = async (req, res) => {
//   const token = req.params.token;

//   const decodedToken = jwt.verify(
//     token,
//     process.env.JWT_SECRET || "defaultSecret",
//   );

//   res.send(decodedToken);
// };

export const tokenCheck = async (req, res, next) => {
  const token = req.params.token;

  const decodedToken = jwt.verify(
    token,
    process.env.JWT_SECRET || "defaultSecret",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      } else {
        console.log(result);

        next();
        return res.send(result);
      }
    }
  );
};

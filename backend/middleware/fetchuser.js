var jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  // Get the user from jws token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please enter valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } 
  catch (error) {
    res.status(401).send({ error: "Please enter valid token" });
  }
};
module.exports = fetchuser;

const jwt = require("../../config/jwt");

module.exports = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(" ");

  try {
    const decoded = await jwt.verify(token);

    req.headers.user = decoded;
    
    return next();
  } catch (error) {return res.status(401).json({ msg: "Token invalid" })};
};

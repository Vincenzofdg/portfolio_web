const { authentication: {verifyToken} } = require('../tools');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) return res.status(401).json({ msg: 'oops you are not allowed =(' });
    verifyToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Expired or invalid token' })
  }
};
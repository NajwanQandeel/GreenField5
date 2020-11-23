const {User} = require('./DataModel').users;
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

const auth = async (req, res, next) => {
  const token = req.header('jwt-auth');
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = await jwt.verify(token, secret);
    const user = await User.findOne({ _id: decoded.id })
    console.log(user)
    req.User = user;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};



module.exports = auth

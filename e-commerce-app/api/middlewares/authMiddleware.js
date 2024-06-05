const passport = require('passport');

const authenticate = passport.authenticate('jwt', { session: false });

const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ success: false, error: 'Access denied' });
  }
  next();
};

module.exports = { authenticate, isAdmin };

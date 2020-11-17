const { User } = require('../models/User');

let auth = (req, res, next) => {
  console.log("auth")
  console.log(req)
  let token = req.headers.authorization;
  console.log(token);
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.send(401, 'Unauthorized')
      // .json({
      //   isAuth: false,
      //   error: true
      // });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };

const User = require("../models/user.model");
const TokenGenerator = require("../models/token_generator");
const UsersController = {
  Index: (req, res) => {
    User.find(async (err, users) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ users: users, token: token });
    });
  },
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({message: 'Bad request'})
      } else {
        res.status(201).json({ message: 'OK' });
      }
    });
  }
  
};
module.exports = UsersController;
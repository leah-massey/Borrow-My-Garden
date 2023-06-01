const router = require('express').Router();
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

router.post('/add', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    username,
    email,
    password
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error' });
        } else if (!result) {
          res.status(401).json({ message: 'Authentication failed' });
        } else {
          const token = jwt.sign(
            { email: email, userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
          res.status(200).json({ token: token, expiresIn: 3600 });
        }
      });
    }
  });
});

module.exports = router;
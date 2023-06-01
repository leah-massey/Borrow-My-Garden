const Garden = require("../models/garden");
const TokenGenerator = require("../models/token_generator");

const GardensController = {
  Index: (req, res) => {
    Garden.find(async (err, gardens) => {
      if (err) {
        throw err;
      }
      const token = await TokenGenerator.jsonwebtoken(req.id)
      res.status(200).json({ gardens: gardens, token: token });
    });
  },
  Create: (req, res) => {
    const garden = new Garden(req.body);
    garden.save(async (err) => {
      if (err) {
        throw err;
      }

      const token = await TokenGenerator.jsonwebtoken(req.id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
};

module.exports = GardensController;
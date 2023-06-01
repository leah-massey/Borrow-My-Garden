const router = require('express').Router();
const TokenGenerator = require("../models/token_generator");
let Garden = require('../models/garden');

router.post('/add', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const size = req.body.size;
  const postcode = req.body.postcode;
  const gardenType = req.body.gardenType;


  const newGarden = new Garden({
    title,
    description,
    size,
    postcode,
    gardenType,
  });

  newGarden.save()
    .then(() => res.json('Garden added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', async (req, res) => {
  try {
    const gardens = await Garden.find({});
    const token = await TokenGenerator.jsonwebtoken(req._id);
    res.status(200).json({ gardens: gardens, token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/:_id', async (req, res) => {
  const id = req.params._id;

  try {
    const garden = await Garden.findById(id);
    if (!garden) {
      return res.status(404).json({ error: 'Garden not found' });
    }

    const token = await TokenGenerator.jsonwebtoken(req._id);
    res.status(200).json({ garden: garden, token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
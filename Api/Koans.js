const express = require('express');
const router = express.Router();

// Koan Model
const Koan = require('../DB/Koan');

router.get('/', (req, res) => {
  Koan.find()
    .then(Koans => res.json(Koans))
});

router.post('/', (req, res) => {
  const newKoan = new Koan({
    title: req.body.title,
    content: req.body.content
  });

  newKoan.save()
    .then(koan => res.json(koan));
});

module.exports = router;

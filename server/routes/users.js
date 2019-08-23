const { Router } = require('express');
const router = Router();
const { image, name } = require('faker');
const User = require('../models/User');

router.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json({ users });
});

router.get('/api/users/add', async (req, res) => {
  for(let i = 0; i < 5; i++) {
    await User.create({
      firstName: name.firstName(),
      lastName: name.lastName(),
      avatar: image.avatar(),
    })
  }
  res.json({ msg: 'Users saved'});
})

module.exports = router;
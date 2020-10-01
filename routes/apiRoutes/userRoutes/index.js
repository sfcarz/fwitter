const router = require('express').Router();

router.route('/')
  .get(((_req, res) => {
    res.send('Hello');
  }));
module.exports = router;

const router = require('express').Router();

// const connection = require('../../../config/connection');
// const { insertUser } = require('../../../model/userQueries');
// const { fetchUsers } = require('../../../model/userOrm');
const { getAllUsers, addUser } = require('../../../controllers/userController');

router.route('/')
  .get(getAllUsers)
  .post(addUser);

module.exports = router;

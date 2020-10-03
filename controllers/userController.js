const { fetchUsers, insertUserToDb } = require('../model/userOrm');

module.exports = {
  getAllUsersApi: async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  },
  insertUserApi: async (req, res) => {
    const { username } = req.body;
    // const query = 'INSERT INTO  users SET ?;';
    try {
      const result = await insertUserToDb(username);
      res.json(result);
      console.log('I am the Result', result);
    } catch (e) {
      res.status(400).json(e);
    }
  },
};

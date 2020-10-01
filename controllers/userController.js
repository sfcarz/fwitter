const { fetchUsers, insertUserToDb } = require('../model/userOrm');

module.exports = {
  getAllUsers: async (_req, res) => {
    try {
      const users = await fetchUsers()
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  },
  addUser: async (req, res) => {
    const userInput = req.body;
    // const query = 'INSERT INTO  users SET ?;';
    try {
      const result = await insertUserToDb(userInput);
      res.json(result);
    } catch (e) {
      res.status(400).json(e);
    }
  },
};

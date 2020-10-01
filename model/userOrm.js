const { findAllUsers, insertUser } = require('./userQueries');

const connection = require('../config/connection');

const fetchUsers = async () => {
  try {
    const [rows] = await connection.query(findAllUsers);
    return Promise.resolve(rows);
  } catch (e) {
    // return Promise.reject(e);
    throw new Error(e);
  }
};

const insertUserToDb = async (userInput) => {
  try {
    return await connection.query(insertUser, userInput);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchUsers,
  insertUserToDb,
};

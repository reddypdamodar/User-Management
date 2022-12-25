//Requiring mongoose package
const { formCollection } = require("../db/mongo");
const findByUsername = async (username) => {
  const data = await formCollection.findOne({ username });
  return data;
};
const createRecord = async (formData) => {
  const data = await formCollection.create(formData);
  return data;
};
module.exports = { findByUsername, createRecord };

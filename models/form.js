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
const find = async () => {
  const data = await formCollection.find({});
  return data;
};
const updatenew = async (username, phone, email) => {
  //if (phone) {
  let data1 = await formCollection.findOne({ username: username.trim() });
  data1._doc.phone = phone;
  // data1.save();

  // }
  // if (email) {
  // let data2 = await formCollection.findOne({ username: username.trim() });
  data1._doc.email = email;
  data1.save();
  //}
  return;
};

module.exports = { findByUsername, createRecord, find, updatenew };

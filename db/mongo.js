let mongoose = require("mongoose");

// Connecting to database
const db = mongoose.createConnection(
  "mongodb+srv://reddypdamodar:test123@cluster0.w4sino7.mongodb.net/user",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Schema
const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  position: { type: String, required: true },
  gender: { type: String, required: true, enum: ["male", "female"] },
});
const formCollection = db.model("Form", formSchema);
module.exports = { db, formCollection };

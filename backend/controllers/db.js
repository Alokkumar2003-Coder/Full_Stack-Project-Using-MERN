const mongoose = require("mongoose");

const Db = async () =>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected successfully")
  } catch (error) {
    console.error(error)
  }
}

module.exports = Db;

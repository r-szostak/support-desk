const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true)
    mongoose.connect(process.env.MONGO_URL)
    console.log("Conntected to MongoDB")
  } catch (err) {
    console.error("Failed to connect with MongoDB")
    console.error(err)
  }
}

module.exports = connectDB

const mongoose = require("mongoose")

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Conntected to MongoDB")
  } catch (err) {
    console.error("Failed to connect with MongoDB")
    console.error(err)
  }
}

module.exports = connectDB

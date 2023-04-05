import mongoose from "mongoose"

const connectDB = async () => {
  mongoose.set("strictQuery", true)
  mongoose.connect(process.env.MONGO_URL).then(
    console.log("Conntected to MongoDB").catch((err) => {
      console.error("Failed to connect with MongoDB")
      console.error(err)
    })
  )
}

export default connectDB

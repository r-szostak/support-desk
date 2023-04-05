const path = require("path")
const express = require("express")
require("colors")
require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
import cors from "cors"

// Connect to db
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/tickets", require("./routes/ticketRoutes"))

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Yariga!",
  })
})

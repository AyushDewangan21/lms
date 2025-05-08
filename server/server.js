import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize Express
const app = express();

// Connect to database
await connectDB();

// MiddleWare  MiddleWare   MiddleWare  MiddleWare  MiddleWare  MiddleWare  MiddleWare
app.use(cors());

// Routes   Routes   Routes   Routes   Routes   Routes   Routes   Routes   Routes
app.get("/", (req, res) => {
  res.send("API Working");
});
app.post("/clerk", express.json(), clerkWebhooks);

// Port    Port    Port    Port    Port    Port    Port    Port    Port    Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

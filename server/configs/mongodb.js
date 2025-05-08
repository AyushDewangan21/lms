import mongoose from "mongoose";

// Connect  to db database

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Database Connected by Ayush")
  );

  await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
};

export default connectDB;

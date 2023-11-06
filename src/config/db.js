// require("dotenv").config();
// const { MongoClient } = require("mongodb");

// // URL
// const { MONGODB_URI } = process.env;

// const connectToDB = async () => {
//   const client = new MongoClient(MONGODB_URI);

//   try {
//     await client.connect();
//     console.log("DB connected");
//   } catch (error) {
//     console.error(error);
//   } finally {
//     // Close the MongoDB client when done
//     await client.close();
//   }
// };

// connectToDB();

require("dotenv").config();
const mongoose = require("mongoose");

// URL
const { MONGODB_URI } = process.env;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (error) {
    console.error(error);
  }
};

connectToDB();

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.PASSWORD}@cluster0.sufae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call this once at startup
connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get-tests", async (req, res) => {
  try {
    const db = client.db("db");
    const collection = db.collection("tests");
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).send("Error retrieving data");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

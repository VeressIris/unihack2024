const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config({
  path: "C:/Users/Iris/Documents/Unihack2024/backend/.env",
});
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.PASSWORD}@cluster0.sufae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());

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

app.post("/post-test", async (req, res) => {
  test = req.body;
  try {
    const db = client.db("db");
    const collection = db.collection("tests");
    const data = await collection.insertOne(test);
    res.json(data);
  } catch (error) {
    console.error("Error posting test:", error);
    res.status(500).send("Error posting data");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

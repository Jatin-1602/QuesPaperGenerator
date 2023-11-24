const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
require("./db/connection");

const Ques = require("./model/ques");
const getQues = require("./middleware/getQues");

// express convert each received json data to an object
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/addQues", async (req, res) => {
  const { ques, difficulty, score, addedBy } = req.body;
  if (!ques || !difficulty || !score) {
    console.log(req.body);
    return res.status(422).json({ message: "Invalid data", status: 422 });
  }

  try {
    const newQues = new Ques({ ques, difficulty, score, addedBy });
    await newQues.save();
    return res.status(200).json({ message: "Ques successfully added", status: 200 });
  } catch (error) {
    console.log("Error in saving");
    return res.status(500).json({ message: "Failed to save", status: 500 });
  }
});


app.post("/getPaper", getQues, (req, res) => {
    console.log("After selecting all ques");
    res.send(req.data);
})

app.listen(PORT, () => {
  console.log(`Server Connected, running at ${PORT}`);
});

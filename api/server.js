require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const notesSchema = mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model("Notes", notesSchema);

app.get("/", function (request, response) {
  mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
  response.json("Welcome");
});

app.get("/api/getAll", async (request, response) => {
  mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
  try {
    const noteList = await Note.find({});
    response.status(200).json(noteList);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Error retrieving notes" });
  }
});

app.post("/api/addNew", async (request, response) => {
  mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
  const { title, content } = request.body;
  const note = new Note({
    title,
    content,
  });

  try {
    await note.save();
    const noteList = await Note.find({});
    response.status(200).json(noteList);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Error saving note" });
  }
});

app.post("/api/delete", async (request, response) => {
  mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
  const { title } = request.body;

  try {
    await Note.deleteOne({ title });
    response.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Error deleting note" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log(`Server started on ${PORT}`);
});

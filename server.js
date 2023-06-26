const express = require("express");
const mongoose = require("mongoose");
const Book = require(".Backend/modal");
const app = express();
const cors = require("cors");

mongoose
  .connect(
    "mongodb+srv://dineshbellam:bellam@cluster0.dwfidd1.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db Connection Established"));
app.use(express.json);
app.use(cors({ origin: "*" }));
// Post Books
app.post("/books", async (req, res) => {
  try {
    const { title,name, price, description} = req.body;
    let newBook = new Book({
      title,
      author,
      price,
      description
    });
    await newBook.save();
    res.status(200).send("Sucessful");
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});

// Retrieve all books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Retrieve a specific book by ID
app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const { title, name, price, description} = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, name, price, description},
      { new: true }
    );
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a book
app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (book) {
      res.json({ message: "Book deleted" });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Run the app

app.listen(3005, () => {
  console.log("Server is Running....");
});

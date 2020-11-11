// Dependencies
const express = require("express");

// setup a port
const PORT = process.env.PORT || 4000;

// setup our express app
const app = express();

// middlewares to parse post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todos = [
  {
    text: "Go get milk",
    complete: false,
  },
];
// setup some routes
// Create
app.post("/api/todos", (req, res) => {
  // add the todo to the array
  console.log(req.body);
  const todo = {
    text: req.body.text,
    complete: false,
  };
  todos.push(todo);
  // return the new todo with the response
  res.json(todo);
});
// Read
// Update
// Delete

// start our app
app.listen(PORT, () => {
  console.log("Hey there. The server is running on port " + PORT);
});

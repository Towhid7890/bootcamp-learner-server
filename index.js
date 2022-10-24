const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const categories = require("./data/courses.json");
const courses = require("./data/courseName.json");

// api for loading all course categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

// api for loading all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// api for showing details of  a course
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((n) => n._id === id);
  res.send(selectedCourse);
});

app.get("/", (req, res) => {
  res.send("Hello BootCamp learner");
});

app.listen(port, () => {
  console.log(`Boot camp learner ${port}`);
});

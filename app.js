import express from "express";
const app = express();
app.get(
  "/",
  (req, res, next) => {
    console.log("A");
  },
  (req, res, next) => {
    console.log("B");
  },
  (req, res, next) => {
    console.log("C");
  }
);
app.use((err, req, res) => {
  res.status(404).json({
    message: err.message,
  });
});
app.listen(4000, () => {
  console.log(`Server is working`);
});

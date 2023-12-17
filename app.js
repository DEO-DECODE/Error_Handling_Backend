import express from "express";
const app = express();
app.get(
  "/",
  (req, res, next) => {
    console.log("A");
     return next(new Error("Custom error"));
  }
);
app.use((err, req, res, next) => {
  res.status(404).json({
    message: err.message,
  });
});
app.listen(4000, () => {
  console.log(`Server is working`);
});

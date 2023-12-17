import express from "express";
const app = express();
class errorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
app.get("/", (req, res, next) => {
  console.log("A");
  return next(new errorHandler("Unauthorized", 401));
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});
app.listen(4000, () => {
  console.log(`Server is working`);
});

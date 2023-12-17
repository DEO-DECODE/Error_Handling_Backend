import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});
app.listen(4000, () => {
  console.log(`Server is working`);
});

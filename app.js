const express = require("express");
const app = express();
require("./src/db/mongoose");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const userRouter = require("./src/routes/userRoutes");

app.use("/api", userRouter);
app.use(express.json());
const publicPath = path.join(__dirname, "client/build");
app.use(express.static(publicPath));
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

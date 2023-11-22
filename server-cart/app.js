const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cartRoute = require("./routes/cartRoutes");
const authRoute = require("./routes/authRoutes");
const emailRoute = require("./routes/emailRoutes");
const productRoute = require("./routes/productRoutes");
const confirmRoutes = require("./routes/confirmpwdRoutes");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(bodyParser.json());
app.use(authRoute);
app.use(cartRoute);
app.use(emailRoute);
app.use(productRoute);
app.use(confirmRoutes);

app.use((err, req, res, next) => {
  // console.log(err);
  const status = err.statusCode || 422;
  const message = err.message;
  const error = new Error(message);
  error.statusCode = status;
  console.log(error.message);
  res
    .status(status)
    .json({ error: { message: error.message, statusCode: error.statusCode } });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(8080, () => {
      console.log("server running");
    });
  })
  .catch((err) => console.log(err));

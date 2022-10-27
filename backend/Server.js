const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const orders = require("./Routes/Order.routes");
app.use("/api/order", orders);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) {
    console.log("mongo connection error ", err);
  } else {
    console.log("Mongodb connection success");
  }
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port: ${port}`);
  } else {
    console.log("error occured ", err);
  }
});

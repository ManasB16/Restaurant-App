const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");

const app = express();
var cors = require("cors");

app.use(cors());

const OrdersRoute = require("./routes/order");

app.use(bodyParser.json({ extended: false }));

app.use(OrdersRoute);

app.use(errorController.get404);

sequelize
  .sync({ force: false })
  .then((result) => {
    app.listen(8000);
  })
  .catch((err) => console.log(err));
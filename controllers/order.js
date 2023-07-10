const Order = require("../models/Order");

exports.getOrds = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json({ ords: orders });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.postOrd = async (req, res, next) => {
  try {
    const price = req.body.price;
    const dish = req.body.dish;
    const table = req.body.table;
    const newOrder = await Order.create({
      price: price,
      dish: dish,
      table: table,
    });
    res.status(201).json({ newOrd: newOrder });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

exports.deleteOrd = async (req, res, next) => {
  try {
    const oId = req.params.ordID;
    await Order.destroy({ where: { id: oId } });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

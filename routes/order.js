const express = require("express");

const OrdController = require("../controllers/order");

const router = express.Router();

router.get("/get-orders", OrdController.getOrds);

router.post("/add-order", OrdController.postOrd);

router.delete("/delete-order/:ordID", OrdController.deleteOrd);

module.exports = router;

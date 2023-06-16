const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const authController = require("../controllers/authController");


router.get("/order", orderController.allOrders);
router.post("/one_order_by_Id", orderController.oneOrderById);
router.post("/one_order_by_email", orderController.oneOrderByEmail);
router.post("/all_order_by_email", orderController.AllOrderByEmail);
router.get("/order/:id", orderController.oneorder);
router.put("/order/:id", orderController.updateorder);
router.delete("/order/:id", orderController.deleteDonor);

module.exports = router;
const router = require("express").Router();
const order = require("../controllers/Order.controller");

router.post("/", order.createOrder);

router.get("/:id", order.getOrder);

router.get("/", order.getAllOrders);

router.delete("/:id", order.deleteOrder);

router.put("/:id", order.updateOrder);

router.patch("/:id", order.updateOrderStatus);

router.patch("/supplier/:id", order.updateSupplierStatus);

module.exports = router;

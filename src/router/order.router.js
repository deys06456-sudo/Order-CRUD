const excpress = require ("express");
const OrderController = require("../controller/order.controller");
const router = excpress.Router();

router.post(
    "/order/create",
    OrderController.creatOrder
);

router.get(
    "/order/get",
    OrderController.getOrders
);

router.get(
    "/order/:id",
    OrderController.getSingleOrder
);

router.put(
    "/order/update/:id",
    OrderController.updateOrder
);

router.delete(
    "/order/delete/:id",
    OrderController.deleteOrder
);

module.exports = router;










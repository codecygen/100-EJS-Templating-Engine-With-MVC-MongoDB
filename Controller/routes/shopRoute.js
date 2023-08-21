const express = require("express");
const shopController = require("../controllers/shopController");
const router = express.Router();

const populateSelectedUser = require("../middleware/populateSelectedUser");
router.use(populateSelectedUser);

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/checkout", shopController.getCheckout);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);

router.post("/cart-delete-item", shopController.postDeleteCartItem);

router.get("/login", shopController.getAllUsers);
router.post("/login", shopController.postSelectedUser);

router.get("/orders", shopController.getOrders);
router.post("/orders", shopController.orderCart);

module.exports = router;
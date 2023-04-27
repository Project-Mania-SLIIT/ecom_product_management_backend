const express = require("express");
const { protectUser } = require("../middleware/authUserMiddleware.js");
const {
	addProduct,
	getProducts,
	getProductById,
	updateProduct,
	deleteProduct,
    searchProduct,
    getProductsBySupplierId
} = require("../controllers/product.controller.js");
const router = express.Router();

router.route("/").get(protectUser,getProducts);
router.route("/:id").get(protectUser,getProductById);

router
	.route("/supplier/:id")
	.post( protectUser,addProduct)
	.get(protectUser, getProductsBySupplierId)
	.put(protectUser, updateProduct)
	.delete(protectUser,deleteProduct);

router.route("/:title").get(protectUser,searchProduct);

module.exports = router;

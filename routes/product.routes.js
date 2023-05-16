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

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

router
	.route("/supplier/:id")
	.post( addProduct)
	.get( getProductsBySupplierId)
	.put( updateProduct)
	.delete(deleteProduct);

router.route("/:title").get(searchProduct);

module.exports = router;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const productSchema = mongoose.Schema({
	supplierId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	title: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	productBrand: {
		type: String,
		required: false,
	},
	productCode: {
		type: String,
		required: false,
		unique: true
	},
	description: {
		type: String,
		required: false,
	},
	image: {
		type: String,
		required: false,
		default: "https://res.cloudinary.com/dfmnpw0yp/image/upload/v1679235307/assets/tsuh9f6v1reihgqxwxrz.ico",
	},
	price: {
		type: Number,
		required: false,
	},
	usage: {
		type: String,
		required: false,
	},
	quantity: {
		type: Number,
		required: false,
	},
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

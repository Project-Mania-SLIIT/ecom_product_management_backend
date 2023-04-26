const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
			default: 'supplier',
		},
		telephone: {
			type: String,
			required: true,
		},
		homeAddress: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		businessName: {
			type: String,
			required: false,
		},
		website: {
			type: String,
			required: false,
		},
		regDate: {
			type: String,
			default: new Date(),
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;

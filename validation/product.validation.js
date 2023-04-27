/**
 * @file Product validation
 * @summary Product domain operations request validation schemas
 */
const Joi = require('joi');
/**
 * Validation  for add product request body
 */
const validateProduct= (data) => {
	const schema = Joi.object({
        supplierId: Joi.string().required().label('Supplier Id'),
        name: Joi.string().required().label('Product Name'),
        category: Joi.number().required().label('Category'),
        itemCode: Joi.number().required().label('Item Code'),
        description: Joi.string().required().label('Description'),
        images: Joi.array().label('Images').optional(),
        price: Joi.number().required().label('Price'),
        quantity: Joi.number().required().label('Quantity'),
	});
	return schema.validate(data);
};
//
module.exports= {validateProduct};
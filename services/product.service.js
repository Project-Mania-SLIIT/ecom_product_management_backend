/**
 * @file Product service
 * @summary Product realated services
 */
const Product = require('../model/product');
/**
 * add product service
 * @param {Object} productData
 * @param {Array} imageUrl
 * @returns {Promise<Object>}
 */
exports.addProduct = async (productData,sId) => {



  const product = new Product(productData);
  await product.save();
  return product;
};
/**
 * Get all products service
 * @returns {Promise<Array>}
*/
exports.getProducts = async () => {
  const products = await Product.find();
  return products;
};
/**
 * Get one product by id service
 * @param {String} id
 * @returns {Promise<Object>}
 */
exports.getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
/**
 * Get one product by id service
 * @param {String} id
 * @returns {Promise<Object>}
 */
exports.getProductsBySupplierId = async (id) => {
  const product = await Product.find({supplierId: id});
  return product;
};
/**
 * Update product service
 * @param {String} id
 * @param {Object} updates
 * @returns {Promise<Object>}
 */
exports.updateProduct = async (id, updates) => {
  console.log(updates);
  console.log(id)
  const product = await Product.findByIdAndUpdate(id, updates, { new: true }); 
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
/**
 * Delete product service
 * @param {String} id
 * @returns {Promise<Object>}
 */
exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};
/**
 * Search product service
 * @param {String} query
 * @returns {Promise<Array>}
 */
exports.searchProduct = async (query) => {
  const products = await Product.find({ title: { $regex: query, $options: 'i' } });
  return products;
};

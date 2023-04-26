const productService = require('../services/product.service');
/**
 * Add product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.addProduct = async (req, res, next) => {
  try {
    const product = await productService.addProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Get all products application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (err) {
    next(err);
  }
};
/**
 * Get one product by id application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Get one product by id application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.getProductsBySupplierId = async (req, res, next) => {
    try {
      const products = await productService.getProductsBySupplierId(req.params.id);
      res.json(products);
    } catch (err) {
      next(err);
    }
  };
/**
 * Update product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Delete product application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
};
/**
 * Search productcontrollers/product.controller.js application programing interface
 * @param {Request} req - http request
 * @param {Response} res - http response
 * @returns {Response}
 **/
exports.searchProduct = async (req, res, next) => {
  try {
    const products = await productService.searchProduct(req.params.title);
    res.json(products);
  } catch (err) {
    next(err);
  }
};

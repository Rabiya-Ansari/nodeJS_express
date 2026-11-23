import express from 'express'
import productController from '../controllers/productController.js';

const productsRoute=express.Router()


productsRoute.get('/products',productController.products)
productsRoute.get('/products/:id',productController.singleProduct)

export default productsRoute
import express from "express";
import ProductController from "../controllers/product.controller.js";

// initialization
const productRouter=express.Router();
const productController=new ProductController();

// create product routes

productRouter.post('/create', productController.createProduct);
productRouter.get('/', productController.getProducts);
productRouter.post('/update',productController.updateProductQty);
productRouter.delete('/delete/:id',productController.deleteProduct);

export default productRouter;



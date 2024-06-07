import { ObjectId } from "mongodb";
import Product from "../Schema/product.schema.js";

export class ProductModel{
    async create(name, quantity){
        try{
            const newProduct=await Product({
                name: name,
                quantity: quantity
            })
            await newProduct.save();
            return newProduct;
        }catch(error){
            console.log('Something went wrong with the database', error.message);
        }
    }
    async getAll(){
        try{
            return await Product.find();
        }catch(error){
            console.log('Something went wrong with the database', error.message);
        }
    }
    async update_qty(id,quantity){
        try{
            // updating the quantity by adding the new quantity

            const product=await Product.findOneAndUpdate({_id:new ObjectId(id)}, { $inc: { quantity:parseInt(quantity)}}, {new: true});
            return product;
        }catch(error){
            console.log('Something went wrong with the database', error.message);
        }
    }
    async delete(id){
        try{
            // find product document with an object id
            const product= await Product.deleteOne({_id:new ObjectId(id)});
            return product;
        }catch(error){
            console.log('Something went wrong with the database ', error.message);
        }
    }
}
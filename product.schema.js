import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },

}, {versionKey: false});

// create a product schema model followed by exporting it 

const Product = mongoose.model('ProductModel', productSchema);
export default Product;

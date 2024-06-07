import mongoose from "mongoose";

const connectTodb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log('Mongodb Connection established...');
    }catch(error){
        console.log(error);
    }
}

export default connectTodb;
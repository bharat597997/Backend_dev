import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
        min:0

    },
    stock:{
        type:String,
        required:true



    },
    category:{
        type:String,
        required:true,
        default:electronics,
    }
});

export default mongoose.model("product",productSchema )
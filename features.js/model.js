import mongoose from "mongoose";

const schema= new mongoose.Schema({
    title:{
        type: String,
    }
})

mongoose.models={}

export const Title = mongoose.model("Title",schema)
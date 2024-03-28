import mongoose from "mongoose";


export const connectDb = async()=>{
    try {
        const connection= await mongoose.connect(process.env.URI,{
            dbName:"title"
        })
        console.log(`DB connected on ${connection.host}`)
        
    } catch (error) {
        console.error(error)
    }
}
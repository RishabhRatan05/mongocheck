const { connectDb } = require("../../features.js/connection")
const { Title } = require("../../features.js/model")


const makeTask = async(req,res)=>{
    await connectDb()

    const {title}= req.body

    await Title.create({title})

    res.status(401).json({
        success:true,
        message:"Created task"
    })

}

export default makeTask


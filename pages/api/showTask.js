const { connectDb } = require("../../features.js/connection")
const { Title } = require("../../features.js/model")

const showTask = async(res)=>{
    await connectDb()

    const titles= await Title.find()

    res.status(401).json({
        success:true,
        message:"Created task",
        titles,
    })
}

export default showTask
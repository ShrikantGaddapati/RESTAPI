const mongoose=require("mongoose");


const connectDB=async()=>
{
    try
        {
const conn=await mongoose.connect(process.env.MONGO_URI,
    {
        
        useUnifiedTopology:true,
        useNewUrlParser:true,
        useFindAndModify:false
    });
    console.log(`mongo connected: ${conn.connection.host}`);
        }
        catch(err)
        {
            console.log(err);
            process.exit(1);

        }
    
    }

    module.exports=connectDB;
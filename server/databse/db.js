import mongoose from "mongoose";


export const Connection= async ( firstname ,lastname,username, Email, password )=>{
    //  const URL = `mongodb://${username}:${password}@ac-nf4srjx-shard-00-00.whiydyt.mongodb.net:27017,ac-nf4srjx-shard-00-01.whiydyt.mongodb.net:27017,ac-nf4srjx-shard-00-02.whiydyt.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-tiotrf-shard-0&authSource=admin&retryWrites=true&w=majority`;
     const URL = `mongodb://127.0.0.1:27017/e-comm`;
    try {
await mongoose.connect(URL,{useunifiedTopology:true,useNewurlparser:true});
console.log('Database connected succesfully');

    }catch (error){
console.log('Error while connecting with the database',error.message);
    }
}


export default Connection;
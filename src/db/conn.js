
const path = require("path")
const envPath= path.join(__dirname)
console.log(envPath)
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dotenv= require('dotenv')
dotenv.config();

const atlas_uri = process.env.ATLAS_URI || "mongodb://localhost:27017/store"



const connectionParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}

mongoose.connect(atlas_uri,connectionParams).then(()=>{
    console.log("mongoDB connected");
}).catch((err)=>{
    console.log(err)
})



const mongoose = require('mongoose');
const mongoDB_URL = process.env.MongoDB_Url;

mongoose.connect(mongoDB_URL);
mongoose.connection.on('connected',()=>{
    console.log('connected');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);
});


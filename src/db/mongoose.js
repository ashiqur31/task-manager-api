const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}, err => {
    if(err) throw err;
    console.log("Mongo Connected");
})
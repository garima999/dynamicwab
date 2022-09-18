//we are cretind connection b/w mongodb and nodejs
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/contact")
.then(()=> console.log("connection succesfully")
)
.catch((e)=>console.log("no connection"))
;
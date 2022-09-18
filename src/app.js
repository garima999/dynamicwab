const express=require("express");
const app=express();
const hbs=require('hbs');
const path=require('path');
//this line is for connect the coneection
require("./db/conn.js");
const Register=require("./models/registers.js");

//use for connect static file
 const static_path=path.join(__dirname,"../public");
 app.use(express.json());
 app.use(express.urlencoded({extended:false}));
 app.use(express.static(static_path));
 app.set('view engine',"hbs")
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register",(req,res)=>{
    res.render('register');
});
app.post("/register",async (req,res)=>{
    try{
const pass=req.body.Password;
const cpass=req.body.ConfirmPassword;

if(pass===cpass){
    const registerEmployee=new Register({
        name:req.body.name,
        Lastname:req.body.Lastname,
        email:req.body.email,
        Password:req.body.pass,
        ConfirmPassword:req.body.cpass
    })
    const registerd=await registerEmployee.save();
    console.log("hello");
    res.Status(201).render("index");
}
else{
    res.send("password are not matching")
}
    }
    catch(error){
        app.Sstatus(400).send(error);

    }
})
app.listen(8000,()=>{
    console.log("server runing on 8000 port")

})
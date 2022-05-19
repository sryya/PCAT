const express= require('express');
const path=require('path');
const ejs=require('ejs')
const app=express();

//Middlewares
app.use(express.static('public'));
app.set("view engine","ejs");
const port =3000;
app.get('/',(req,res)=>{
    
    res.render('index')
})
app.get('/about',(req,res)=>{
    
    res.render('about')
})
app.get('/add',(req,res)=>{
    
    res.render('add')
})
app.listen(port,()=>{
    console.log(`Server started at ${port}`);
});



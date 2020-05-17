const express=require('express');
const router=express.Router();
const path=require('path');
const data=require('../data.json');
let product;
let productDetails=[];
 router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
 })

 router.post('/add-product',(req,res,next)=>{
      product=req.body.title;
      for(let i=0;i<data.length;i++){
         if(data[i].Product==product){
         productDetails.push({
            product:data[i].Product,
            price:data[i].Price,
            source:data[i].Source,
            manufacture:data[i].Manufacture,
            make:data[i].Make
          } )
         }
      }
      res.redirect('/');

 })


exports.routes=router;
exports.productDetails=productDetails;
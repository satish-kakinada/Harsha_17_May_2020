const express=require('express');
const path=require('path');
const router=express.Router();
const adminData=require('./admin')

router.get('/',(req,res,next)=>{

   const products=adminData.productDetails;
   console.log(products)
   res.render('shop',{
       posts:products,
      //product:products.product,
      pageTitle:'Products',
    //   source:products.source,
    //   manufacture:products.manufacture,
    //   make:products.make,    
    //   price:products.price,
      path:'/',
      hasProducts:products.length>0,
      activeShop:true,
      productCSS:true
   })
    
})

module.exports=router;

 
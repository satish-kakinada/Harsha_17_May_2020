var data=require('./data.json')
var express= require('express');
var app= express();
var bodyParser=require('body-parser');
const path=require('path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')


app.set('view engine','ejs');
app.set('views','views')


app.use(bodyParser.urlencoded({extended:false}))
app.use(adminRoutes.routes);
app.use(shopRoutes)

//serving static css files
app.use(express.static(path.join(__dirname,'public')))


app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page Not found'})
})


var server=app.listen(3000,()=>{
    console.log('server is listeing')
});




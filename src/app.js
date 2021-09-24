const express=require('express');
const app=express();
const morgan=require('morgan');
const path=require('path');
const mongoose=require('mongoose');


//Importin Routes
const indexRoutes=require('./routes/index')

//Setings
app.set('port', process.env.PORT || 80);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//Midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//Routes
app.use('/', indexRoutes);

//Startin server
app.listen(app.get('port'), '172.27.48.81', ()=>{
    console.log('Server on port:', app.get('port'));
});
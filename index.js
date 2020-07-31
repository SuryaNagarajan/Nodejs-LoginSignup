var express = require('express');
var bodyParser=require('body-parser');

var urlencode=bodyParser.urlencoded({extended:false});
var app=express();

app.set('view engine','ejs');
app.use(express.static('./assets'));

app.get('/',function(req,res)
{
    res.render('home');
})
app.get('/signup',function(req,res)
{
    res.render('signup');
})
app.get('/login',function(req,res)
{
    res.render('login');
})

var data=[{username:'Surya',email:'surya@gmail.com',password:'surya'}];

app.post('/log',urlencode,function(req,res)
{
    console.log(req.body);
    var user=req.body;
    
    for(var i=0; i<data.length; i++){
        if(user.email===data[i].email && user.password===data[i].password){
            res.end('YOU HAVE LOGGED IN SUCCESSFULLY ');
        }
    }
    
    res.end('YOU HAVE ENTERED WRONG CREDENTIALS!!');
    
})
app.post('/save',urlencode,function(req,res)
{
    console.log(req.body)
    data.push(req.body);
    res.render('login');
})
app.listen(3000);
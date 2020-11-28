const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port = 9903
var Register = require('./models/register');

app.set('view engine', 'ejs');

mongoose.connect( 'mongodb+srv://admin-isva:vishabhi@cluster0.hfzzy.mongodb.net/Interior_Design',
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connection.once('open',function(){
    console.log("Connection has been made");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/html/Aboutus.html', (req, res) => {
  res.sendFile(__dirname + '/html/Aboutus.html')
})

app.get('/html/contactus.html', (req, res) => {
  res.sendFile(__dirname + '/html/contactus.html')
})

app.get('/html/services.html', (req, res) => {
  res.sendFile(__dirname + '/html/services.html')
})

var ItemSchema = new mongoose.Schema(
  {
      name:String,
      email:String,
      phno:Number,
      city_name:String,
      message:String
  }
);



var item = Date();

app.get('/html/feedback.html', (req, res) => {

  Register.find({}, function(err, foundItems){
    res.render('list', {newListItems: foundItems});
  })

  
})

app.get('/css/style.css', function(req,res){
  res.sendFile(__dirname + '/css/style.css')
})

app.get('/css/footer.css', function(req,res){
  res.sendFile(__dirname + '/css/footer.css')
})

app.get('/css/aboutus.css', function(req,res){
  res.sendFile(__dirname + '/css/aboutus.css')
})

app.get('/css/contactus.css', function(req,res){
  res.sendFile(__dirname + '/css/contactus.css')
})

app.get('/css/navigation.css', function(req,res){
  res.sendFile(__dirname + '/css/navigation.css')
})

app.get('/css/services.css', function(req,res){
  res.sendFile(__dirname + '/css/services.css')
})

app.get('/css/feedback.css', function(req,res){
  res.sendFile(__dirname + '/css/feedback.css')
})

app.get('/imgs/architecture.png', function(req,res){
  res.sendFile(__dirname + '/imgs/architecture.png')
})

app.get('/imgs/city-hall.png', function(req,res){
  res.sendFile(__dirname + '/imgs/city-hall.png')
})

app.get('/imgs/durablity.png', function(req,res){
  res.sendFile(__dirname + '/imgs/durablity.png')
})

app.get('/imgs/floor-plan.png', function(req,res){
  res.sendFile(__dirname + '/imgs/floor-plan.png')
})

app.get('/imgs/home.png', function(req,res){
  res.sendFile(__dirname + '/imgs/home.png')
})

app.get('/imgs/send.png', function(req,res){
  res.sendFile(__dirname + '/imgs/send.png')
})

app.get('/imgs/sketch.png', function(req,res){
  res.sendFile(__dirname + '/imgs/sketch.png')
})

app.get('/imgs/town.png', function(req,res){
  res.sendFile(__dirname + '/imgs/town.png')
})

app.get('/imgs/warranty.png', function(req,res){
  res.sendFile(__dirname + '/imgs/warranty.png')
})

app.get('/imgs/favicon.png', function(req,res){
  res.sendFile(__dirname + '/imgs/favicon.png')
})

app.post('/register', function(req,res){
  var name = req.body.name,
      email = req.body.email,
      city_name = req.body.city,
      phno = req.body.phone_num,
      message = req.body.message;
      var newRegistration = {name:name,email:email,city_name:city_name,phno:phno,message:message};
      Register.create(newRegistration, function(err,newlyCreeated) {
        if(err) {
          console.log(err);
        }
        else {
          res.redirect('./html/feedback.html');
        }
      });
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

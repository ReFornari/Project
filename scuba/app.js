var express = require("express"); //call express to be used by the application
var app = express();
const path = require('path');
const VIEWS = path.join(__dirname, 'views');

app.use(express.static("scripts"));
app.use(express.static("images"));


app.get('/', function(req, res){
res.render('index.jade', {root:VIEWS});
console.log ("Home Page");
});

app.get('/courses', function(req, res){
res.render('/courses.jade', {root:VIEWS});
  console.log ("Courses Page");
});

app.get('/membership', function(req, res){
res.sendFile('membership.jade', {root:VIEWS});
console.log ("Membership Page");
});

app.get('/contact', function(req, res){  
res.sendFile('contact.jade', {root:VIEWS});
console.log ("Contact Page");
});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0" , function(){
 console.log("App is running...... Yesssssssssssssssssssssssssssss")
});
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const hash = require("pbkdf2-password");
const path = require("path");
const session = require("express-session");
const db = require("./db/db");

app = express();
const httpPort = 8080;
app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.static("public/img"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));

app.use(function(req, res, next){
    var err = req.session.error;
    var msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
  });

  hash({ password:  }, function (err, pass, salt, hash) {
    if (err) throw err;
    // store the salt & hash in the "db"
    users.tj.salt = salt;
    users.tj.hash = hash;
  });
  

//App GET ROUTES
app.get('/', function(req, res){
    res.render("Index");
})

app.get('/Admin', function(req, res){
    res.render("Admin");
})

app.get('/Chat', function(req, res){
    res.render("Chat");
})

app.get('/Meetings', function(req, res){
    res.render("Meetings");
})

app.get('/Scouting', function(req, res){
    res.render("Scouting");
})

app.get('/Todo', function(req, res){
    res.render("Todo");
})

app.get('/Signin', function(req, res){
    res.render("Signin");
})


//Server Start
app.listen(httpPort, function(){
    console.log("Convergence Web Suite Running on Port:" + httpPort);
})
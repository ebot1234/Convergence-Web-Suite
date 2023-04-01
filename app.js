const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

app = express();
const httpPort = 8080;
app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.static("public/img"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



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
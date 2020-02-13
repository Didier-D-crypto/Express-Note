//const express = require('express');

//const app = express();
//const https =
 
//app.get('/api/.notes', (req, res)=> {
    //res.send('');
//});

//app.get('/', (req, res) => {
   // res.send([])
//}); 

//PORT Listener
//app.listen(3000, ()=> console.log('listening on port 3000')); 
 

//false.writeFile("db.json", data, (err) =>{ 
   // if (err) throw err; 
   /// console.log("The file has been saved.");
//});//
//-------------------------------------------//
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
const express = require("express");
var path = require("path");
//Node.js: HTTP Server Handling GET and POST Request
//At POST Request: Grab form data and display them

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Tells node that we are creating an "express" server
// Sets an initial port. We"ll use this later in our listener
var app = express();
var PORT = process.env.PORT || 443; //443 because of HTTPS
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
//HTTP SERVER HANDLING GET AND POST REQUEST /
//var http= require('http');
//var fs = require('fs'); 
//var server =http.createServer(function (req, res){ 
    //if (req.method === "GET"){
        //res.writeHead( 200{ "Content-Type": "notes.html"});
    //else if(req.method ==="POST"){ 
        //var body =""; 
        //req.on("data", function (rabbit){
            //body += rabbit
        //})
        //req.on("end", function(){ 
            //res.writeHead(200 {"Content-Type":"index/html"});
            //res.end(body);
       // })

    //}).listen(3000);
  
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/reserve.html"));
});

app.get("", function(req, res) {
    return res.json();
});
app.get("/test/:id", function(req, res) {
    return res.json();
});
app.post("/test/:id", function(req, res) {
    var newReservation = req.body;
    reservations.push(newReservation);
    res.json(newReservation);
});
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
const express = require('express');

const fs = require("fs")

var path = require('path');

var app = express()

var port = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/home.html');
});	

app.get('/css/resume.css', function (req, res) {
  res.sendFile(__dirname +'ui/feed.css');
});
app.get('/css/resume.min.css', function (req, res) {
  res.sendFile(__dirname +'/css/resume.min.css');
});

//for img files
app.get('/img/bibin.png', (req, res) => {
	res.sendFile(__dirname + '/img/bibin.png');
});	


//for vendors



app.get('/vendor/fontawesome-free/webfonts/:fileName', (req, res) => {
	sendResponse(res, `vendor/fontawesome-free/webfonts/${req.params.fileName}`)
});
app.get('/vendor/bootstrap/js/bootstrap.bundle.min.js', (req, res) => {
	sendResponse(res, `vendor/bootstrap/js/bootstrap.bundle.min.js`)
});
app.get('/vendor/fontawesome-free/css/all.min.css', (req, res) => {
	sendResponse(res, `vendor/fontawesome-free/css/all.min.css`)
});
app.get('/vendor/bootstrap/css/bootstrap.min.css', (req, res) => {
	sendResponse(res, `vendor/bootstrap/css/bootstrap.min.css`)
});
app.get('/vendor/fontawesome-free/:filePath', (req, res) => {
	sendResponse(res, `vendor/fontawesome-free/${req.params.filePath}`)
});
app.get('/vendor/jquery/:filePath', (req, res) => {
	sendResponse(res, `vendor/jquery/${req.params.filePath}`)
});
app.get('/vendor/jquery-easing/:filePath', (req, res) => {
	sendResponse(res, `vendor/jquery-easing/${req.params.filePath}`)
});


// for js files
app.get('/js/:filePath', (req, res) => {
	sendResponse(res, `js/${req.params.filePath}`)
});

function sendResponse(res, fileURL) {
	res.sendFile(__dirname + `/${fileURL}`);
}

app.listen(port, () => {

  console.log("listen on 3000");

});
	
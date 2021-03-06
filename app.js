var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config');
 
var app =express();


//heroku settings
var port = 8081;
var ip = '0.0.0.0';
console.log("port: " + port);
console.log("ip: " + ip); 

mongoose.connect(config.getDBConnectionString());
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/assets/',express.static(__dirname+'/public'));
var fileUploadController = require('./server/fileUploadAPI');
var playersController = require('./server/playersAPI');
fileUploadController(app);
playersController(app);

 


console.log('ip = ' + ip);
console.log('port = ' + port);
console.log('hello jeff - troubleshooting');
app.listen(port, ip,function(){
     console.log(new Date() + ' Server is listening on port :' + port);
});
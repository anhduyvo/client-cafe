﻿var http = require('http');
var server = require('./server');

/* ----------- Start Server -----------*/
http.createServer(server).listen(server.get('port'), function () {
    console.log('eCoffee Web & API is running on port:' + server.get('port'));
});
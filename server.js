var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8000);
console.log("My app listen at 8000");
module.exports = app;

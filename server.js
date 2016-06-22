var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "./static")));
// app.set('views', path.join(__dirname, './views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.listen(8000, function() {
 console.log("listening on port 8000");
})

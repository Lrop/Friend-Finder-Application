var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use(express.static("public"));
// app.use(express.static(__dirname + '../public/Assets/styleFriend.css'));

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);





// app.get('/', function (req, res) {
//     res.render('home', {});
//   });

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });

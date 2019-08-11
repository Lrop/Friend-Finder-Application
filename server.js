var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     // database: "freindFinder.DB"
//   });
  
//   connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
  
//     console.log("connected as id " + connection.threadId);
//   });
  



 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true})); 
 app.use(bodyParser.text());
 app.use(bodyParser.json({type: "application/vnd.api+json"}));


app.use(express.static("app/public"));

// require("./routing/apiRoutes.js")(app);
// require("./routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  

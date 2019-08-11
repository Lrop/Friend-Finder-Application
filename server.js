var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;




 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);




app.get('/', function (req, res) {
    res.render('home', {});
  });


  app.use(function(err, req, res, next) {
      
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
// render the error page
res.status(err.status || 500);
res.send('error');//this or res.status(err.status || 500).send('error')
});
   

app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });
  
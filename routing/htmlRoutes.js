var path = require("path");

module.exports = function(app) {
    app.get("/public/home.html", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    app.get("/public/survey.html", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
}


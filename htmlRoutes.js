var path = require("path");



app.get("/survey", function(req, res) {
    requestAnimationFrame.sendFile(path.join(_dirname + "/../public/survey.html"));
});

app.use(function(req, res) {
    res.sendFile(path.joint(_dirname + "/../public/home.html"));
});



}
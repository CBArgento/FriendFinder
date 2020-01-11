var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

// Create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./api-routes")(app);
require("./htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
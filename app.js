/**
 * Created by cocuba on 24-08-17.
 */
var express = require("express"),
    app = express();

var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//app.configure(function () {
    app.use(bodyParser);
    app.use(methodOverride);
    app.use(app.router);
//})/;

routes = require('./routes/tvshows')(app);

router.get('/', function(req, res) {
    res.send("Hello World!");
});

app.use(router);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
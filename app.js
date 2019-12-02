var express 	= require("express"),
	app     	= express();

var port = process.env.PORT || 3000

var indexRoute = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/gsap", express.static(__dirname + "/node_modules/gsap"));

app.use(indexRoute);

app.listen(port, function(){
	console.log("Hopper's Bar");
});
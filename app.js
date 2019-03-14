var express 	= require("express"),
	app     	= express();


var indexRoute = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(indexRoute);

// app.listen(3000, function(){
// 	console.log("Hopper's Bar");
// });

// HOSTED SERVER CODE
app.listen(process.env.PORT, process.env.IP);
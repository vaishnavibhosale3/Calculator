//jshint eversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("result "+ result);
})
app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});
app.post("/bmi", function(req, res){
    var num3= parseFloat(req.body.num3);
    var num4= parseFloat(req.body.num4);
    var relt= num3 / (num4*num4);
    res.send("result " + relt);
});
app.listen(3000, function(){
    console.log("started");
});
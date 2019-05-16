var express = require('express');
var router=express.Router();
var location = require("../model/location");
var classLocation = require("../classLocation");

var toaDo_1 = new classLocation();
var toaDo_2 = new classLocation();

router.post("/", (req, res) => {
    location.find({ tag: "aa02" }, (err, result) => {
        toaDo_1.xcale = result[0]["location"]["xcale"];
	    toaDo_1.ycale = result[0]["location"]["ycale"];
     });
     location.find({ tag: "0296" }, (err, result) => {
        toaDo_2.xcale = result[0]["location"]["xcale"];
	    toaDo_2.ycale = result[0]["location"]["ycale"];
     });
    res.send({tag1_xcale:toaDo_1.xcale,tag1_ycale:toaDo_1.ycale,tag2_xcale:toaDo_2.xcale,tag2_ycale:toaDo_2.ycale})
    res.send("thanh cong");
});

module.exports=router;
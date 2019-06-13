var express = require('express');
var router = express.Router();
var location = require("../model/location");
var anchor = require("../model/anchor");
var gateway  = require('../model/gateway');

var classLocation = require("../classLocation");
var classGateway = require("../classGateway");

var anchor_1 = new classLocation();
var anchor_2 = new classLocation();
var toaDo_1 = new classLocation();
var toaDo_2 = new classLocation();
var gateway_1 = new classGateway();

router.post("/", (req, res) => {
    location.find({ tag: "aa02" }, (err, result) => {
        toaDo_1.xcale = result[0]["location"]["xcale"];
        toaDo_1.ycale = result[0]["location"]["ycale"];
    });
    location.find({ tag: "0296" }, (err, result) => {
        toaDo_2.xcale = result[0]["location"]["xcale"];
        toaDo_2.ycale = result[0]["location"]["ycale"];
    });

    //anchor
    anchor.find({ tag: "5583" }, (err, result) => {
        anchor_1.xcale = result[0]["location"]["xcale"];
        anchor_1.ycale = result[0]["location"]["ycale"];
    });
    anchor.find({ tag: "8305" }, (err, result) => {
        anchor_2.xcale = result[0]["location"]["xcale"];
        anchor_2.ycale = result[0]["location"]["ycale"];
    });
    gateway.find({tag:"5322"},(err,result)=>{
        gateway_1.tag = result[0]['tag'];
        gateway_1.id = result[0]['id'];
    })
    // gateway 
    
    res.send({ tag1_xcale: toaDo_1.xcale, tag1_ycale: toaDo_1.ycale, tag2_xcale: toaDo_2.xcale, tag2_ycale: toaDo_2.ycale, anchor1_xcale: anchor_1.xcale, anchor1_ycale: anchor_1.ycale, anchor2_xcale: anchor_2.xcale, anchor2_ycale: anchor_2.ycale, gateway1_tag: gateway_1.tag,gateway1_id : gateway_1.id })
    res.send("thanh cong");
});

module.exports = router;
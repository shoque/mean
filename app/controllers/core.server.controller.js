'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Article = mongoose.model('Article');


exports.index = function(req, res) {
    res.render('index', {
        user: req.user || null,
        request: req
    });
};
exports.jquerytest = function(req, res) {
    res.render('jquerytest', {
        user: req.user || null,
        request: req
    });
};




exports.dseprocess = function(req, res) {
    var request = require('request');
    var url = "http://www.dsebd.org/mst.txt";


    request.get(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var csv = body;
            //console.log(csv);
            var str = csv.split("\n");
            //   for (var i=0; i<str.length-200; i++)
            //    {
            // console.log (i+ "----" +str[i] );
            //   }
            //console.log(str);
            //var k1 = str.indexOf("A Group (Equity)");
            var k2 = str.indexOf("A Group (Equity)");
            var k3 = str.indexOf("                                                      ------    ---------    ---------");
            console.log(" k2  = " + str[93].length);

            //for (var i = 0;i<str[93].length;i++){
            //  console.log(" char" +i+" = " + str[93][i]);


            // }
            //console.log(str[93].charCodeAt(16));
            var stockinfo = [];
            var rowinfo = [];

            for (var i = (k2 + 4); i < k3; i++) {

                var split = str[i].match(/\S+/g);
                for (var k = 0; k < split.length; k++) {
                    //console.log(split[k]);



                }
                var check = true;
                if (split[5] < 0) {
                    check = false;
                } else {
                    check = true;
                }
                stockinfo.push({
                    sym: split[0],
                    open: split[1],
                    high: split[2],
                    low: split[3],
                    close: split[4],
                    change: split[5],
                    trade: split[6],
                    volume: split[7],
                    value: split[8],
                    check: check
                });

                // console.log(stockinfo);

            }
            //random number between -10% to 10% 

            console.log(stockinfo.length);
            for (var i = 0; i < stockinfo.length; i++) {
                var rand = parseFloat(((Math.random() - 0.5) / 10));
                //console.log("rand = " + rand);
                var temp = parseFloat(stockinfo[i].close);
                //console.log("temp = " + temp);
                stockinfo[i].close = temp + (temp * rand);
                //console.log("close = " + stockinfo[i].close);
                var change = temp - stockinfo[i].close;
                stockinfo[i].change = change;

                //console.log("change = " + change);
                var check = true;
                if (change < 0) {
                    check = false;
                } else {
                    check = true;
                }

            }
            //console.log(stockinfo);
            res.json(stockinfo);


            // Continue with your processing here.
        }
    });
    //res.send("hello World");

};






exports.dsedaily = function(req, res) {
    var request = require('request');
    var url = 'http://www.dsebd.org/datafile/quotes.txt';


    request.get(url, function(error, response, body) {

        if (!error && response.statusCode == 200) {
            var csv = body;
            var str = csv.split('\n');
            var stockinfo = [];
            for (var i = 4; i < str.length - 2; i++) {
                var split = str[i].match(/\S+/g);
                stockinfo.push({
                    sym: split[0],
                    price: Number(split[1])
                });
            }
            res.json(stockinfo);


            // Continue with your processing here.
        }
    });

};


exports.mystocks = function(req, res) {
    var request = require('request');
    var url = 'http://www.dsebd.org/datafile/quotes.txt';


    request.get(url, function(error, response, body) {

        if (!error && response.statusCode == 200) {
            var csv = body;
            var str = csv.split('\n');
            var stockinfo = [];
            for (var i = 4; i < str.length - 2; i++) {
                var split = str[i].match(/\S+/g);
                stockinfo.push({
                    sym: split[0],
                    price: Number(split[1])
                });
            }
            res.json(stockinfo);


            // Continue with your processing here.
        }
    });

};
exports.buyItem = function(req, res) {
    var selectedItem = new Article(req.body);
    selectedItem.user = req.user;

    console.log(req.user.displayName);
    console.log(selectedItem);

    selectedItem.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(selectedItem);
            console.log(selectedItem.symbol+' added');
        }
    });


};

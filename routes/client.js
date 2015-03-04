var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET client page. */
router.get('/', function (req, res, next) {
    var config = JSON.parse(fs.readFileSync(__dirname + './../public/json/config.json'));
    res.render('client', { title: 'Client', sizes: config.sizes, modes: config.modes, colors: config.colors, inits: config.inits});
});

module.exports = router;

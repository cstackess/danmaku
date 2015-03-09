var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET emit page. */
router.get('/', function(req, res, next) {
    var config = JSON.parse(fs.readFileSync(__dirname + './../public/jsons/config.json'));
    res.render('emit', { title: 'Emitter', sizes: config.sizes, modes: config.modes, colors: config.colors, inits: config.inits});
});

module.exports = router;
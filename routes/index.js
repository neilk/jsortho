var express = require('express');
var router = express.Router();


var ortho = [
  {
    label: 'io.js / Flux / React.js',
    since: 1417156083000
  }
];


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'JavaScript Orthodoxy',
                        ortho: ortho });
});

module.exports = router;

var express = require('express')
//var app = express.createServer()
var router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.json())
/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('post suuceesful with data :' +req.body)
  res.json(req.body)
});

module.exports = router;
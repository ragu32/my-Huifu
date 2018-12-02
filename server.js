const express = require('express');
const path = require('path');

var apiRouter = require('./server/api/app')
const app = express();
const bodyParser = require('body-parser')
apiRouter.use(bodyParser.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-Huifu'));
app.use('/api', apiRouter)

app.get('/', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/my-Huifu/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
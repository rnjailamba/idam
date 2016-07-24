var modules = require('./setup/all_modules');//require all modules that are shared by all controllers
var router = modules.express.Router();
var config = require('../config/config.js');//require all modules that are shared by all controllers
var appConfig = require('../config/appConfig'); // configure service api urls in dev/prod/beta

modules.winston.log('debug', 'Hello again distributed log files!');


// io.on('connection', function(socket){
//   console.log('a user connected original');
// });

// get the socket apis from the helpers folder


// PING
// ==============================================
router.get('/', function(req, res){

    res.render('index/home', { title: 'Express' });

});

router.get('/a', function(req, res){

    res.render('index/a', { title: 'Express' });

});

router.get('/b', function(req, res){

    res.render('index/b', { title: 'Express' });

});

router.get('/timeline', function(req, res){

    res.render('index/timeline', { title: 'Express' });

});


var justPrintSomething = function(){
    console.log("print something");
}

module.exports.router = router;

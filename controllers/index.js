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

    // res.render('index/home', { title: 'Express' });
    res.sendFile('home.html', {
      root: 'views/index'
    });
});

router.get('/a', function(req, res){

  res.sendFile('contactDemo.html', {
    root: 'views/index'
  });
});

router.get('/quizIdam*', function(req, res){

  res.sendFile('quizIdam.html', {
    root: 'views/index'
  });
});

router.get('/timeline', function(req, res){

    res.render('index/timeline', { title: 'Express' });

});

router.get('/galleryIdam*', function(req, res){

  res.sendFile('galleryIdam.html', {
    root: 'views/index'
  });
});

router.get('/faq*', function(req, res){

  res.sendFile('faq.html', {
    root: 'views/index'
  });
});

router.get('/contactIdam*', function(req, res){

  res.sendFile('contactIdam.html', {
    root: 'views/index'
  });
});

router.get('/servicesIdam*', function(req, res){

  res.sendFile('servicesIdam.html', {
    root: 'views/index'
  });
});


router.get('/links*', function(req, res){

  res.sendFile('links.html', {
    root: 'views/index'
  });
});

router.get('/resources*', function(req, res){

  res.sendFile('resources.html', {
    root: 'views/index'
  });
});

router.get('/aboutIdam*', function(req, res){

  res.sendFile('aboutIdam.html', {
    root: 'views/index'
  });
});


var justPrintSomething = function(){
    console.log("print something");
}

module.exports.router = router;

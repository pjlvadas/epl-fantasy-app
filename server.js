var application_root = __dirname;
var express          = require('express');
var bodyParser 		 = require('body-parser');
var path 			 = require('path');
var logger 			 = require('morgan');
var session			 = require('express-session');
var bcrypt			 = require('bcrypt');
var request 		 = require('request');
var path 			 = require('path');
var models 			 = require(__dirname + '/models');

var app              = express();

var Owner            = models.owners;
var Team 	         = models.teams;
var Roster           = models.rosters;
var Player           = models.players;
var League           = models.leagues;
var Matchup          = models.matchups;
var Week             = models.weeks;
var Performance		 = models.performances; 
var Defense          = models.defenses;
var Offense          = models.offenses;
var Goalie           = models.goalies;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(application_root, 'public')));
app.use(express.static(path.join(application_root, 'browser')));
app.use(session({
	secret: 'secretssinkships',
	saveUninitialized: true,
	resave: false
}));

// var restrictAccess = function (req, res, next) {
//   var sessionID = parseInt(req.session.currentUser);
//   var reqID = parseInt(req.params.id);

//   sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'YOU SHALL NOT PASS'})
// }

// var authenticate = function (req, res, next) {
//   req.session.currentUser ? next() : res.status(400).send({err: 400, msg: 'LOGIN TROLL'});
// }




app.listen(3000, function() {
	console.log('Server listening on 30000000000000');
});

module.exports = app;
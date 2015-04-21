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
var Defense          = models.defensePerformances;
var Offense          = models.offensePerformances;
var Goalie           = models.goaliePerformances;

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
//   var sessionID = parseInt(req.session.currentOwner);
//   var reqID = parseInt(req.params.id);

//   sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'YOU SHALL NOT PASS'})
// }

// var authenticate = function (req, res, next) {
//   req.session.currentOwner ? next() : res.status(400).send({err: 400, msg: 'LOGIN TROLL'});
// }

//unrestricted for testing purposes only
app.get('/owners', function (req, res) {
	Owner
	.findAll({include: Team})
	.then(function(owners) {
		res.send(owners);
	});
});

app.post('/owners', function (req, res) {
	var firstName = req.body.owner_first_name;
	var lastName  = req.body.owner_last_name;
	var username  = req.body.username;
	var password  = req.body.password;

	bcryp.hash(password, 10, function (err, has) {
		Owner
		.create({
			owner_first_name: firstName,
			owner_last_name: lastName,
			username: username,
			password_digest: hash
		})
		.then(function(owner) {
			res.send(owner);
		});
	});
});

app.get('/owners/:id', authenticate, restrictAccess, function (req, res) {
	Owner
	.findOne({
		where: {id: req.params.id},
		include: Team
	})
	.then(function(owner) {
		res.send(owner);
	});
});

app.put('/owners/:id', authenticate, restrictAccess, function (req, res) {
	Owner
	.findOne({
		where: {id: req.params.id},
		include: Team
	})
	.then(function(owner) {
		owner
		.update(req.body)
		.then(function(updatedOwner) {
			res.send(updatedOwner);
		});
	});
});

app.delete('/owners/:id', authenticate, restrictAccess, function (req, res) {
	Owner
	.findOne(req.params.id)
	.then(function(owner) {
		owner
		.destroy()
		.then(function(deletedOwner) {
			res.send(deletedOwner);
		});
	});
});


app.listen(3000, function() {
	console.log('Server listening on 30000000000000');
});

module.exports = app;
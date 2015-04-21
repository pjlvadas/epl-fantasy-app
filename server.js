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

var restrictAccess = function (req, res, next) {
  var sessionID = parseInt(req.session.currentOwner);
  var reqID = parseInt(req.params.id);

  sessionID === reqID ? next() : res.status(401).send({err: 401, msg: 'WRONG PASSWORD'})
}

var authenticate = function (req, res, next) {
  req.session.currentOwner ? next() : res.status(400).send({err: 400, msg: 'WRONG OWNER'});
}

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
	var ownerBio  = req.body.owner_bio;
	var username  = req.body.username;
	var password  = req.body.password;
	var admin 	  = req.body.admin;

	bcrypt.hash(password, 10, function (err, hash) {
		Owner
		.create({
			owner_first_name: firstName,
			owner_last_name: lastName,
			owner_bio: ownerBio,
			username: username,
			admin: false,
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

//unrestricted for testing purposes only
app.put('/owners/:id', function (req, res) {
	Owner
	.findOne({
		where: { id: req.params.id },
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

//unrestricted for testing purposes only
app.delete('/owners/:id', function (req, res) {
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


//unrestricted for testing purposes only
app.get('/leagues', function (req, res) {
	Owner
	.findAll({include: Team})
	.then(function(owners) {
		res.send(owners);
	});
});

app.post('/leagues', function (req, res) {
	var leagueName = req.body.league_name;
	var adminID  = req.body.adminID;

	bcrypt.hash(password, 10, function (err, hash) {
		League
		.create({
			league_name: leagueName,
		})
		.then(function(league) {
			res.send(league);
		});
	});
});

//unrestricted for testing purposes only
app.get('/leagues/:id', function (req, res) {
	League
	.findOne({
		where: {id: req.params.id},
		include: [Team]
	})
	.then(function(league) {
		res.send(league);
	});
});

//unrestricted for testing purposes only
app.put('/leagues/:id', function (req, res) {
	Owner
	.findOne({
		where: { id: req.params.id },
		include: [Team]
	})
	.then(function(league) {
		league
		.update(req.body)
		.then(function(updatedLeague) {
			res.send(updatedLeague);
		});
	});
});

//unrestricted for testing purposes only
app.delete('/leagues/:id', function (req, res) {
	Owner
	.findOne(req.params.id)
	.then(function(league) {
		league
		.destroy()
		.then(function(deletedLeague) {
			res.send(deletedLeague);
		});
	});
});

app.post('/sessions', function (req, res) {
	var loginUsername = req.body.username;
	var loginPassword = req.body.password;

	Owner
	.findOne({
		where: { username: loginUsername }
	})
	.then(function(owner) {
		if (owner) {
			bcrypt.compare(loginPassword, owner.password_digest, function (err, result) {
				if (result) {
					req.session.currentOwner = owner.id;
					res.send('Correct-A-Mundo!');
				} else {
					res.status(400);
					res.send({
						err: 400, msg: 'Wrong Password Budday'
					});
				}
			});
		} else {
			res.status(400);
			res.send({
				err: 400,
				msg: "I DON'T KNOW YOU"
			});
		}
	});
});

app.delete('/sessions', function (req, res) {
	delete req.session.currentOwner;
	res.send('LOG OUT SUCCESSFUL');
});

app.get('/current_owner', function (req, res) {
	Owner
	.findOne({ where: {id: req.session.currentOwner}, include: Team})
	.then(function(owner) {
		res.send(owner);
	});
});


app.use(express.static('./public'));

app.listen(3000, function() {
	console.log('Server listening on 30000000000000');
});

module.exports = app;
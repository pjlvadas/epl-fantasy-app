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

////////////////OWNER////////////////////
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

////////////////LEAGUES////////////////////

//unrestricted for testing purposes only
app.get('/leagues', function (req, res) {
	League
	.findAll({include: Owner})
	.then(function(leagues) {
		res.send(leagues);
	});
});

app.post('/leagues', function (req, res) {
	var leagueName = req.body.league_name;
	var adminId    = req.body.admin_id;

	League
	.create({
		league_name: leagueName,
		admin_id: adminId
	})
	.then(function(league) {
		res.send(league);
	});
});

//unrestricted for testing purposes only
app.get('/leagues/:id', function (req, res) {
	League
	.findOne({
		where: {id: req.params.id},
		include: [Owner]
	})
	.then(function(league) {
		res.send(league);
	});
});

//unrestricted for testing purposes only
app.put('/leagues/:id', function (req, res) {
	League
	.findOne({
		where: { id: req.params.id },
		include: [Owner]
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
	League
	.findOne(req.params.id)
	.then(function(league) {
		league
		.destroy()
		.then(function(deletedLeague) {
			res.send(deletedLeague);
		});
	});
});

////////////////TEAMS////////////////////
//unrestricted for testing purposes only
app.get('/teams', function (req, res) {
	Team
	.findAll({include: Owner})
	.then(function(teams) {
		res.send(teams);
	});
});

app.post('/teams', function (req, res) {
	var leagueId  = req.body.league_id;
	var ownerId   = req.body.owner_id;
	var teamName  = req.body.team_name;
	var teamMotto = req.body.team_motto;

	Team
	.create({
		team_name: teamName,
		team_motto: teamMotto,
		league_id: leagueId,
		owner_id: ownerId
	})
	.then(function(team) {
		res.send(team);
	});
});

//unrestricted for testing purposes only
app.get('/teams/:id', function (req, res) {
	Team
	.findOne({
		where: {id: req.params.id},
		include: Owner
	})
	.then(function(team) {
		res.send(team);
	});
});

//unrestricted for testing purposes only
app.put('/teams/:id', function (req, res) {
	Team
	.findOne({
		where: { id: req.params.id },
		include: Owner
	})
	.then(function(team) {
		team
		.update(req.body)
		.then(function(updatedTeam) {
			res.send(updatedTeam);
		});
	});
});

//unrestricted for testing purposes only
app.delete('/teams/:id', function (req, res) {
	Team
	.findOne(req.params.id)
	.then(function(league) {
		team
		.destroy()
		.then(function(deletedTeam) {
			res.send(deletedTeam);
		});
	});
});

////////////////ROSTER////////////////////
//unrestricted for testing purposes only
app.get('/rosters', function (req, res){
  Roster
    .findAll( {include: [
        {model: Owner, include: [
          {model: Team}]
          }]
        })
    .then(function(rosters){
      res.send(rosters);
    });
});

app.post('/rosters', function (req, res) {
	var weekId  = req.body.week_id;
	var teamId = req.body.team_id;
	var playerId = req.body.player_id;

	Roster
	.create({
		week_id: weekId,
		team_id: teamId,
		player_id: playerId
	})
	.then(function(roster) {
		res.send(roster);
	});
});

//unrestricted for testing purposes only
app.get('/rosters/:id', function (req, res) {
    Roster
    .findOne({where:
  	  {id: req.params.id},
  		  include: [
  		  {mode: Owner, include: [
  			  {model: Team}]
  		  }]
  	})
    .then(function(roster){
      res.send(roster);
    });
});

//unrestricted for testing purposes only
app.put('/rosters/:id', function (req, res) {
	Team
  	.findOne({where:
  	  {id: req.params.id},
  		  include: [
  		  {mode: Owner, include: [
  			  {model: Team}]
  		  }]
  	})
	.then(function(roster) {
		roster
		.update(req.body)
		.then(function(updatedRoster) {
			res.send(updatedRoster);
		});
	});
});

//unrestricted for testing purposes only
app.delete('/rosters/:id', function (req, res) {
	Roster
	.findOne(req.params.id)
	.then(function(roster) {
		roster
		.destroy()
		.then(function(deletedRoster) {
			res.send(deletedRoster);
		});
	});
});

////////////////MATCHUPS////////////////////
//unrestricted for testing purposes only
app.get('/matchups', function (req, res){
	Matchup
	.findAll({include: [Roster]})
	.then(function(matchups) {
		res.send(matchups);
	});
});

app.post('/matchups', function (req, res) {
	var weekId  = req.body.week_ID;
	var teamOneId = req.body.team_one_ID;
	var teamTwoId = req.body.team_two_ID;	
	var seasonId = req.body.season_ID;

	Matchup
	.create({
		week_id: weekId,
		team_one_id: teamOneId,
		team_two_id: teamTwoId,		
		season_id: seasonId
	})
	.then(function(matchup) {
		res.send(matchup);
	});
});

//unrestricted for testing purposes only
app.get('/matchups/:id', function (req, res) {
	Matchup
	.findOne({
		where: {id: req.params.id},
		include: [Roster]
	})
	.then(function(matchup) {
		res.send(matchup);
	});
});

//unrestricted for testing purposes only
app.put('/matchups/:id', function (req, res) {
	Matchup
	.findOne({
		where: { id: req.params.id },
		include: [Roster]
	})
	.then(function(matchup) {
		matchup
		.update(req.body)
		.then(function(updatedMatchup) {
			res.send(updatedMatchup);
		});
	});
});

//unrestricted for testing purposes only
app.delete('/matchups/:id', function (req, res) {
	Matchip
	.findOne(req.params.id)
	.then(function(matchup) {
		matchup
		.destroy()
		.then(function(deletedMatchup) {
			res.send(deletedMatchup);
		});
	});
});

////////////////WEEKS////////////////////
//unrestricted for testing purposes only
app.get('/weeks', function (req, res) {
	Week
	.findAll({include: [Matchup]})
	.then(function(weeks) {
		res.send(weeks);
	});
});

app.post('/weeks', function (req, res) {
	var season = req.body.season;
	var weekStart  = req.body.week_start;
	var weekEnd  = req.body.week_end;

	Week
	.create({
		season: season,
		week_start: weekStart,
		week_end: weekEnd
	})
	.then(function(week) {
		res.send(week);
	});
});


app.get('/weeks/:id', authenticate, restrictAccess, function (req, res) {
	Week
	.findOne({
		where: {id: req.params.id},
		include: [Matchup]
	})
	.then(function(week) {
		res.send(week);
	});
});

//unrestricted for testing purposes only
app.put('/weeks/:id', function (req, res) {
	Week
	.findOne({
		where: { id: req.params.id },
		include: [Matchup]
	})
	.then(function(week) {
		week
		.update(req.body)
		.then(function(updatedWeek) {
			res.send(updatedWeek);
		});
	});
});

//unrestricted for testing purposes only
app.delete('/weeks/:id', function (req, res) {
	Week
	.findOne(req.params.id)
	.then(function(week) {
		week
		.destroy()
		.then(function(deletedWeek) {
			res.send(deletedWeek);
		});
	});
});

///////// SESSIONS //////////
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

// app.listen(3000, function() {
// 	console.log('Server listening on 30000000000000');
// });

module.exports = app;
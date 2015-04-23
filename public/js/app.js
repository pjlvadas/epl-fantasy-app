var App = {
	Models: {},
	Collections: {},
	Views: {},
	router: {}
};

$(function() {
	console.log('WHAT A HIT');

	App.ownersCollection = new App.Collections.Owners();
	App.ownersCollection.fetch();
	App.leaguesCollection = new App.Collections.Leagues();
	App.leaguesCollection.fetch();
	
	App.router = new App.router();
	Backbone.history.start();
});
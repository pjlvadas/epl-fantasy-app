App.Views.LeaguesListView = Backbone.View.extend({

	el: "#sub-container",

	initialize: function() {
		console.log('new LEAGUE LIST VIEW created');
		this.render();
	},

	render: function() {
		this.collection.each(this.renderLeagues, this);
	},

	renderLeagues: function(leagueModel) {
		new App.Views.League({model: leagueModel});
	},

	events: {
		'click #button-edit-league': 'editTeam'
	},

	editTeam: function(e) {
		var leagueId = $(e.currentTarget.closest("div")).data("value");
		App.router.navigate('edit_league/' + leagueId, {trigger: true});	
	}
});
App.Views.League = Backbone.View.extend({

	className: 'league-view',

	initialize: function() {
		console.log('new LEAGUE VIEW created');
		this.leagueTemplate = Handlebars.compile($('#template-league-view').html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.leagueTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#sub-container').append(this.$el);
	},

	events: {
		'click #go-back': 'goBack',
		'click #add-team': 'addTeam'		
	},

	goBack: function() {
		App.router.navigate('home', {trigger:true});
	},

	addTeam: function() {

	}
});
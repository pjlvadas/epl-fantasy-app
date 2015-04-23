App.Views.NewLeague = Backbone.View.extend({

	className: 'new-league',

	initialize: function() {
		this.template = Handlebars.compile($('#template-create-league').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		$('#sub-container').append(this.$el);
	},

	events: {
		'click #create-league': 'createLeague',
		'click #go-back': 'goBack'
	},

	createLeague: function() {
		debugger;
		var data = {
			league_name: $('input[name="league-name"]').val(),
			number_teams: $('input[name="number-teams"]').val()
		};
		// if (App.leaguesCollection.findwhere({league_name: data.league_name})) {
		// 	alert('League Name already taken. Please try again.')
		// } else {
			$.ajax({
				url: '/leagues',
				method: 'POST',
				data: data
			})
			.done(function(newLeague) {
				var leagueId = newLeague.id;
				sessionStorage.setItem('currentLeague', leagueId); 
				App.router.navigate('leagues/' + leagueId, {trigger:true});
			});
		// }
	},

	goBack: function() {
		App.router.navigate('home', {trigger:true});
	}
});
App.Views.NewLeague = Backbone.View.extend({

	className: 'new-league',

	initialize: function() {
		this.template = Handlebars.compile($('#template-create-league').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		$('#container').append(this.$el);
	},

	events: {
		'click #create-league': 'createLeague',
		'click #go-back': 'goBack'
	},

	createLeague: function() {
		var data = {
			league_name: $('input[name="league-name"]').val(),
			admin_id: 
		};
		if (App.leaguesCollection.findwhere({league_name: data.leagueName})) {
			alert('League Name already taken. Please try again.')
		} else {
			$.ajax({
				url: '/leagues',
				method: 'POST',
				data: data
			})
			.done(function(newLeague) {
				var leagueId = newLeague.id;
				App.router.navigate('/leagues/' + leagueId, {trigger:true});
			});
		}
	},

	goBack: function() {
		App.router.navigate('home', {trigger:true});
	}
});
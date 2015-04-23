App.Views.EditLeague = Backbone.View.extend({

	className: 'edit-league',

	initialize: function() {
		this.template = Handlebars.compile($('#template-edit-league').html());
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#sub-container').append(this.$el);
	},

	events: {
		"click #complete-edit": "completeEdit",
		"click #button-delete-league": "deleteLeague",
		'click #go-back': 'cancel'		
	},

	completeEdit: function() {
		console.log('Completed Edit');
		var data = {
			league_name: $('input[name="league-name"]').val(),
			number_teams: $('input[name="number-teams"]').val(),
			admin_id: $('input[name="admin-id"]').val()
		};
		this.model.save(data);
		alert('League Info Updated');
		var leagueId = this.model.id;
		App.router.navigate('leagues/' + leagueId, {trigger:true});
	},	

	deleteLeague: function() {
		console.log(this.model);
		alert('League DESTROYED FOREVER');
		this.model.destroy();
		sessionStorage.setItem('currentLeague', '');
		App.router.navigate('all_leagues', {trigger:true});
	},

	cancel: function() {
		App.router.navigate('all_leagues', {trigger:true});
	}
});
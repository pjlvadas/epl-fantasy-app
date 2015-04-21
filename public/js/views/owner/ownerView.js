App.Views.Owner = Backbone.View.extend({

	className: 'owner-view',

	initialize: function() {
		console.log('new OWNER VIEW created');
		this.overviewTemplate = Handlebars.compile($('#template-normal-overview').html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.overviewTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#container').append(this.$el);
		new App.Views.Team({collection: this.model.team});
	},

	events: {
		'click button[name="button-edit-account"]': "ownerEditView",
		'click button[name="button-delete-account"]': "ownerDelete",
		'click button[name="button-log-out"]': "logOut",
		'click button[name="button-new-league"]': "createLeagueView"
	},

	ownerEditView: function() {
		console.log('Edit Owner View Triggered');
		App.router.navigate('edit_owner/' + this.model.id, {trigger:true});
	},

	createLeagueView: function() {
		console.log('Create League View Triggered');
		App.router.navigate('create_league', {trigger:true});
	}
});
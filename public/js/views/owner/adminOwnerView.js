App.Views.Admin = Backbone.View.extend({

	className: 'admin-view',

	initialize: function() {
		console.log('new ADMIN VIEW created');
		this.adminTemplate = Handlebars.compile($('#template-admin-overview').html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.adminTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#container').append(this.$el);
		// new App.Views.Team({collection: this.model.team});
	},

	events: {
		'click button[name="button-edit-account"]': "adminEditView",
		'click button[name="button-delete-account"]': "adminDelete",
		'click button[name="button-log-out"]': "logOut",
		'click button[name="button-new-league"]': "createLeagueView",

	},

	logOut: function() {
		console.log('Logging Out');
		sessionStorage.setItem('currentOwner', '');
		alert('Logged Out. See Ya.');
	},

	adminEditView: function() {
		console.log('Edit Owner View Triggered');
		App.router.navigate('edit_owner/' + this.model.id, {trigger:true});
	},

	createLeagueView: function() {
		console.log('Create League View Triggered');
		App.router.navigate('create_league', {trigger:true});
	}
});
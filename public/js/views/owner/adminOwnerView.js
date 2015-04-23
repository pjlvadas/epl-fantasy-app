App.Views.Admin = Backbone.View.extend({

	className: 'admin-view',

	initialize: function() {
		console.log('new ADMIN VIEW created');
		this.adminTemplate = Handlebars.compile($('#template-admin-overview').html());
		sessionStorage.setItem('currentOwner', this.model.id);
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.adminTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#container').append(this.$el);
		// new App.Views.Team({collection: this.model.team});
	},

	events: {
		'click #button-edit-account': "adminEditView",
		'click #button-delete-account': "adminDelete",
		'click #button-log-out': "logOut",
		'click #button-new-league': "createLeagueView",
		'click #button-view-leagues': "viewLeagues"

	},

	logOut: function() {
		console.log('Logging Out');
		sessionStorage.setItem('currentOwner', '');
		App.router.navigate('home', {trigger:true});		
		alert('Logged Out. See Ya.');
	},

	adminEditView: function() {
		console.log('Edit Owner View Triggered');
		App.router.navigate('edit_owner/' + this.model.id, {trigger:true});
	},

	createLeagueView: function() {
		console.log('Create League View Triggered');
		App.router.navigate('create_league', {trigger:true});
	},

	viewLeagues: function() {
		console.log('View League Triggered');
		var league = App.leaguesCollection.get(id);
		App.router.navigate('leagues/' + league.id, {trigger:true});
	},

	adminDelete: function() {
		alert('OWNER DESTROYED');
		this.model.destroy();
		sessionStorage.setItem('currentOwner', '');
		App.router.navigate('home', {trigger: true});
	}
});
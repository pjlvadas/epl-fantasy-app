App.Views.OwnerLogin = Backbone.View.extend({

	className: 'owner-login',

	initialize: function() {
		console.log('Login View Created');
		this.template = Handlebars.compile($('#template-owner-log-in').html());
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template();
		this.$el.html(renderedTemplate);
		$('#container').append(this.$el);
	},

	events: {
		'keypress input[name="username"]': 'login',
		'keypress input[name="password"]': 'login',
		'click button[name="button-log-in"]': 'login',
		'click button[name="button-sign-up"]': 'signUp',
	},

	login: function(e) {
		if (e.keycode === 13 || e.type === 'click') {
			var username = $('input[name="username"]').val();
			var currentOwner = App.usersCollection.findWhere({username: username});
			var id = currentOwner.id;
			sessionStorage.setItem("currentOwner", id);
			App.router.navigate('owners/' + id, {trigger:true});
		}
	},

	signUp: function() {
		console.log('Create Owner Triggered');
		App.router.navigate('create_owner', {trigger: true});
	}

	
});
App.Views.NewOwner = Backbone.View.extend({

	className: 'new-owner',

	initialize: function() {
		this.template = Handlebars.compile($('#template-owner-sign-up').html());
		this.render();
	},

	render: function() {
		this.$el.html(this.template());
		$('#container').append(this.$el);
	},

	events: {
		'click #create-owner': 'createOwner',
		'click #go-back': 'goBack'
	},

	createOwner: function() {
		var data = {
			firstName: $('input[name="first-name"]').val(),
			lastName: $('input[name="last-name"]').val(),
			ownerBio: $('input[name="owner-bio"]').val(),
			username: $('input[name="username"]').val(),
			password: $('input[name="password"]').val()
		};
		if (App.ownersCollection.findWhere({username: data.username})) {
			alert('Username is taken. Please try again.')
		} else {
			$.ajax({
				url: '/owners',
				method: 'POST',
				data: data
			})
			.done(function(newOwner) {
				sessionStorage.setItem('currentOwner', newOwner.id);
				App.router.navigate('owner/' + newOwner.id, {trigger:true});
			});
		}
	},

	goBack: function() {
		App.router.navigate('home', {trigger:true});
	}
});
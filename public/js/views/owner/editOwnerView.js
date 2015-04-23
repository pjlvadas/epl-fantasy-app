App.Views.EditOwner = Backbone.View.extend({

	className: 'edit-owner',

	initialize: function() {
		this.template = Handlebars.compile($('#template-owner-edit').html());
		this.render();
	},

	render: function() {
		var renderedTemplate = this.template(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#container').append(this.$el);
	},

	events: {
		"click #complete-edit": "completeEdit",
		"click #button-delete-account": "deleteOwner",
		'click #go-back': 'cancel'
	},

	completeEdit: function() {
		console.log('completed edit');
		var data = {
			owner_first_name: $('input[name="first-name"]').val(),
			owner_last_name: $('input[name="last-name"]').val(),
			owner_bio: $('input[name="owner-bio"]').val(),
			username: $('input[name="username"]').val(),
			password: $('input[name="password"]').val()
		}
		this.model.save(data);
		alert('Owner Info Updated');
		var ownerId = this.model.id;
		App.router.navigate('owners/' + ownerId, {trigger:true});
	},

	deleteOwner: function() {
		console.log(this.model);
		alert('Owner DESTROYED FOREVER');
		this.model.destroy();
		sessionStorage.setItem('currentOwner', '');
		App.router.navigate('home', {trigger:true});
	},

	cancel: function() {
		var ownerId = this.model.id;
		App.router.navigate('owners/' + ownerId, {trigger:true});
	}
});
App.router = Backbone.Router.extend({
	initialize: function() {
		console.log('Router Created');
	},

	routes: {
		'': 'homepage',
		'home': 'homepage',
		'login': 'login',
		'owners/:id': 'owner',
		'register': 'registerOwner',
		'edit_owner/:id': 'editOwner',
		'create_league': 'createLeague'
	},

	homepage: function() {
		$('#home-page').hide();
		if (sessionStorage.getItem('currentOwner')) {
			$('#container').empty();
			var ownerId = sessionStorage.getItem('currentOwner');
			App.router.navigate('owners/' + ownerId, {trigger: true});
		}
		else {
			$('#container').hide();
			$('#home-page').show();
		}
	},

	login: function() {
		console.log('Login Route');
		$('#container').empty();
		$('#container').show();
		$('#home-page').hide();
		new App.Views.OwnerLogin();
	},

	owner: function(id) {
		console.log('Owner Route')
		$('#container').empty();
		$('#container').show();		
		$('#home-page').hide();
		App.ownersCollection
			.fetch()
			.done(function() {
				var owner = App.ownersCollection.get(id);
				var type = owner.attributes.admin;
				if (type === true) {
					new App.Views.Admin({model: owner});
				} else {
					new App.Views.Owner({model: owner});
				  };

			});	
	},

	registerOwner: function() {
		console.log('Create Owner Route');
		$('#container').empty();
		$('#container').show();
		$('#home-page').hide();
		new App.Views.NewOwner();
	},

	editOwner: function(id) {
		console.log('Edit Owner Route');
		$('#container').empty();
		$('#container').show();		
		$('#home-page').hide();
		App.ownersCollection
			.fetch()
			.done(function() {
				var ownerModel = App.ownersCollection.get(id);
				new App.Views.EditOwner({model: ownerModel});
			});
	},

	createLeague: function() {

	}

});
App.Collections.Leagues = Backbone.Collection.extend({

	initialize: function() {
		console.log('new LEAGUES COLLECTION created');
	},

	url: '/leagues',

	model: App.Models.League
});
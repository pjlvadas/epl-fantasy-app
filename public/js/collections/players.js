App.Collections.Players = Backbone.Collection.extend({

	initialize: function() {
		console.log("New PLAYERS COLLECTION created");
	},

	url: '/players',

	model: App.Models.Player

})
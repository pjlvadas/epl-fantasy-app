App.Collections.Owners = Backbone.Collection.extend({

	initialize: function() {
		console.log('new OWNERS COLLECTION created');
	},

	url: '/owners',

	models: App.Models.Owner
})
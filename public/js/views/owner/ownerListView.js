App.Views.UsersListView = Backbone.View.extend({

	initialize: function() {
		console.log('new OWNER LIST VIEW created');
		this.render();
		this.listenTo(this.collection, 'reset', this.render);
		this.listenTo(this.collection, 'add', this.renderOwner);
	},

	render: function() {
		this.collection.each(this.renderOwner, this);
	},

	renderOwner: function(ownerModel) {
		var ownerView = new App.Views.Owner({model: ownerModel});
	}
});
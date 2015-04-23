App.Views.PlayersListView = Backbone.View.extend({

	el: "#sub-container",

	initialize: function() {
		console.log('new ARTWORK LIST VIEW created');
		this.render();
	},

	render: function() {
		this.collection.each(this.renderPlayers, this);
	},

	renderPlayers: function(playerModel) {
		new App.Views.Player({model: playerModel});
	},

	events: {
		'click #button-add-player': "addPlayer"
	},

	addPlayer: function() {
		alert("Maybe next time, slick.");
	}
});
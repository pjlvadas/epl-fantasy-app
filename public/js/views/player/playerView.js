App.Views.Player = Backbone.View.extend({

	className: 'player-view',

	initialize: function() {
		console.log('new PLAYER VIEW created');
		this.playerTemplate = Handlebars.compile($('#template-player-view').html());
		this.renderView();
	},

	renderView: function() {
		var renderedTemplate = this.playerTemplate(this.model.toJSON());
		this.$el.html(renderedTemplate);
		$('#sub-container').append(this.$el);
	}


})
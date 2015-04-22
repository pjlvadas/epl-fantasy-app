App.Views.NavigationView = Backbone.View.extend({

	el: '#search',

	initialized: function() {
		console.log('Navigation View Created');
	},

	render: function() {
		this.$el.html(this.template());
		this.$el.appendTo($('#container'));
	}
});
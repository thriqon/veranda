Veranda.IndexRoute = Ember.Route.extend({
	model : function () {
		this.transitionTo('tag', 'INBOX');
	}
});


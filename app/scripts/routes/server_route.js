Veranda.ServerRoute = Ember.Route.extend({
	model : function (params) {
		return params.server_id;
	}
});

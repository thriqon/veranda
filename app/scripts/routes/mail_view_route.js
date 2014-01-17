Veranda.MailViewRoute = Ember.Route.extend({
	model : function (params) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			Veranda.get('pouch').get(params.mail_id, function (err, response) {
				if (err) {
					reject(err);
				} else {
					resolve(response);
				}
			});
		});
	}
});


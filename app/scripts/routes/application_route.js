Veranda.ApplicationRoute = Ember.Route.extend({
	model : function () {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			Veranda.get('pouch').query('webmail/mails_by_tag_by_date', {group_level: 1}, function (err, response) {
				if (err) {
					reject(err);
				} else {
					resolve(response.rows.map(function (row) {
						return row.key[0];
					}));
				}
			}); 
		}); 
	}
});

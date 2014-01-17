Veranda.TagRoute = Ember.Route.extend({
	model : function (params) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			Veranda.get('pouch').query('webmail/mails_by_tag_by_date', {reduce: false, startkey: [params.tag_id], endkey: [params.tag_id, {}]}, function (err, response) {
				if (err) {
					reject(err);
				} else {
					resolve(response.rows);
				}
			}); 
		}); 
	}
});


Veranda.Router.map(function () {
	this.resource('server', {path: '/:server_id'}, function () {
		this.resource('tag', {path: '/tag/:tag_id'});
		this.resource('mail', function () {
			this.route('view', {path: '/:mail_id'});
			this.route('compose');
		});
	});
});


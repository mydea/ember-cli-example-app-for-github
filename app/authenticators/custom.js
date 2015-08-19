import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';

export default Base.extend({
	loginUrl: '/api/login',
	logoutUrl: "/api/logout",

	restore: function (data) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (!Ember.isEmpty(data.token)) {
				resolve(data);
			} else {
				reject();
			}
		});
	},
	authenticate: function (credentials) {
		var self = this;
		return new Ember.RSVP.Promise(function (resolve, reject) {
			Ember.$.ajax({
				url: self.loginUrl,
				type: 'POST',
				data: JSON.stringify({
					login: {
						email: credentials.email,
						password: credentials.password
					}
				}),
				contentType: 'application/json'
			}).then(function (response) {
				Ember.run(function () {
					resolve({
						token: response.accessToken,
						userId: response.user
					});
				});
			}, function (/*xhr, status, error*/) {
				/*resolve({
					token: "testtoken",
					userId: 9999
				});*/
				reject("Error message here!");
			});
		});
	},
	invalidate: function () {
		var self = this;
		return new Ember.RSVP.Promise(function (resolve) {
			Ember.$.ajax({
				url: self.logoutUrl,
				type: 'POST'
			}).always(function () {
				resolve();
			});
		});
	}
});
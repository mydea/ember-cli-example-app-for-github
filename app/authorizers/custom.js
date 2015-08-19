import Base from 'simple-auth/authorizers/base';
import Ember from 'ember';

export default Base.extend({
    authorize: function (jqXHR/*, requestOptions*/) {
        if (this.get('session.isAuthenticated') && !Ember.isEmpty(this.get('session.secure.token'))) {
            jqXHR.setRequestHeader('X-Authorization', this.get('session.secure.token'));
        }
    }
});
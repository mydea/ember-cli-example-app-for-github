import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from "ember";

const userSession = Ember.Service.extend({
    fullName: "Anna Doe"
});

moduleForComponent('list-item', 'Integration | Component | list item', {
    integration: true,

    beforeEach: function () {
        this.register('service:user-session', userSession);
        this.inject.service('user-session', {as: 'userSession'});
    }
});

test('it renders', function (assert) {
    this.render(hbs`{{list-item}}`);
    assert.equal(this.$().text().trim(), 'Name: Anna Doe');
});

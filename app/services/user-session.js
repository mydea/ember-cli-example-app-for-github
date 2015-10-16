import Ember from 'ember';

export default Ember.Service.extend({

    firstName: "John",
    lastName: "Doe",

    fullName: Ember.computed("firstName", "lastName", function() {
        return this.get("firstName") + " " + this.get("lastName");
    })

});

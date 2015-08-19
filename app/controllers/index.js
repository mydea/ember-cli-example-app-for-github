import Ember from 'ember';

export default Ember.Controller.extend({
    users: [],

    usersLoad: Ember.observer(function() {
        console.time("load users");
        this.store.findAll("user").then((users) => {
            console.timeEnd("load users");
            this.set("users", users);
        })
    }).on("init")
});

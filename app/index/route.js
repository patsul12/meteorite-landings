import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.store);
    return this.store;
  }
});

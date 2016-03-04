import Ember from 'ember';

export default Ember.Service.extend({
  current: null,

  newMap(map) {
    this.set('current', map);
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  currentCircle: Ember.inject.service(),
  currentlyLoading: false
});

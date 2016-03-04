import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('meteorite-landings');
  },
  actions: {
    loading(transition, originRoute) {
      let controller = this.controllerFor('application');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
          controller.set('currentlyLoading', false);
      });
    }
  }
});

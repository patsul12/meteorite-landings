import Ember from 'ember';

export default Ember.Component.extend({
  showFilter: false,

  actions: {
    showFilter() {
      this.get('showFilter') === true ? this.set('showFilter', false) : this.set('showFilter', true);
    }
  }
});

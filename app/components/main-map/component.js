import Ember from 'ember';
import GMaps from 'npm:gmaps';

export default Ember.Component.extend({
  map: null,

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var newMap = new GMaps({
        div: "#main-map",
        lat: 0.00,
        lng: 0.00, 
        zoom: 3
      });
      this.set('map', newMap);
    });
  }
});

import Ember from 'ember';
import GMaps from 'npm:gmaps';

export default Ember.Component.extend({
  map: Ember.inject.service(),

  didInsertElement: function() {
    var newMap = new GMaps({
      div: "#main-map",
      lat: 0.00,
      lng: .00,
      zoom: 3
    });
    this.get('map').newMap(newMap);
  }
});

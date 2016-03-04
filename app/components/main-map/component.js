import Ember from 'ember';
import GMaps from 'npm:gmaps';

export default Ember.Component.extend({
  map: Ember.inject.service(),
  currentCircle: Ember.inject.service(),

  didInsertElement: function() {
    var styleArray = [
      {
        featureType: "all",
        stylers: [
         { saturation: -80 }
        ]
      },{
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { hue: "#00ffee" },
          { saturation: 100 }
        ]
      },{
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    var newMap = new GMaps({
      div: "#main-map",
      lat: 0.00,
      lng: .00,
      zoom: 3,
      styles: styleArray,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    this.get('map').newMap(newMap);
  },

  actions: {
    updateInfoPanel(circle, landing) {
      this.get('currentCircle').update(circle, landing);
    }
  }
});

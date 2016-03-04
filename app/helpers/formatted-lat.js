import Ember from 'ember';

export function formattedLat(params/*, hash*/) {
  if (params[0]) {
    var Lat = Ember.Object.extend({
      lng: null,
      formatted: Ember.computed('lng', function() {
        return `${this.get('lng').toString().substring(0,4)}`;
      })
    });
    var lat = Lat.create({
      lng: params[0]
    });
    return lat.get('formatted');
  };
}

export default Ember.Helper.helper(formattedLat);

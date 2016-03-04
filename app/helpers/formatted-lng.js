import Ember from 'ember';

export function formattedLng(params/*, hash*/) {
  if (params[0]) {
    var Lng = Ember.Object.extend({
      lng: null,
      formatted: Ember.computed('lng', function() {
        return `${this.get('lng').toString().substring(0,4)}`;
      })
    });
    var lng = Lng.create({
      lng: params[0]
    });
    return lng.get('formatted');
  };
}

export default Ember.Helper.helper(formattedLng);

import Ember from 'ember';

export default Ember.Service.extend({
  circle: null,
  currentLat: null,
  currentLng: null,
  currentLanding: null,
  currentLandingRecClass: null,
  currentLandingMass: null,
  currentLandingName: null,
  currentLandingYear: null,

  update(circle, landing) {
    this.set('circle', circle);
    this.set('currentLat', circle.center.lat());
    this.set('currentLng', circle.center.lng());
    this.set('currentLanding', landing);
    this.set('currentLandingRecClass', landing.get('recclass'));
    this.set('currentLandingMass', landing.get('mass'));
    this.set('currentLandingName', landing.get('name'));
    this.set('currentLandingYear', landing.get('year'));
  }
});

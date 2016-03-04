import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service(),
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      var circle = this.get('map').current.drawCircle({
        lat: parseFloat(this.get('landing').get('reclat')),
        lng: parseFloat(this.get('landing').get('reclong')),
        radius: Math.sqrt(parseFloat(this.get('landing').get('mass'))) * 100,
        fillColor: "red",
        strokeWidth: 0
      });
      console.log(this.get('landing'));
    })
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service(),
  circle: null,

  didInsertElement: function() {
    var component = this;
    Ember.run.scheduleOnce('afterRender', this, function() {
      var circle = this.get('map').current.drawCircle({
        lat: parseFloat(this.get('landing').get('reclat')),
        lng: parseFloat(this.get('landing').get('reclong')),
        radius: Math.sqrt(parseFloat(this.get('landing').get('mass'))) * 200,
        fillColor: "red",
        strokeOpacity: 0.4,
        strokeWidth: 2,
        strokeOpacity: 0,
        mouseover: function(e) {
          component.sendAction('updateInfoPanel', component.get('circle'));
        }
      });
      this.set('circle', circle)
    })
  }
});

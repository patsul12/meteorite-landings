import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service(),
  circle: null,
  landing: null,

  didInsertElement: function() {
    var component = this;
    Ember.run.scheduleOnce('afterRender', this, function() {
      var landing = this.get('landing');
      var circle = this.get('map').current.drawCircle({
        lat: parseFloat(landing.get('reclat')),
        lng: parseFloat(landing.get('reclong')),
        radius: Math.sqrt(parseFloat(landing.get('mass'))) * 200,
        fillColor: "red",
        strokeOpacity: 0.4,
        strokeWidth: 2,
        strokeOpacity: 0,
        click: function(e) {
          component.sendAction('updateInfoPanel', component.get('circle'), component.get('landing'));
        }
      });
      this.set('circle', circle);
      this.set('landing', landing);
    })
  }
});

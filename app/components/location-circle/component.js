import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    console.log(this.get('location'))
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.get('map').drawCircle({
        lat: parseInt(this.get('location').get('recLat')),
        lng: parseInt(this.get('location').get('recLng')),
        radius: Math.sqrt(parseInst(this.get('location').get('mass'))) * 100
      }) 
    })
  }
});

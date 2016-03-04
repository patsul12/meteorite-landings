import DS from 'ember-data';

export default DS.Model.extend({
  fall: DS.attr(),
  geolocation: DS.attr(),
  mass: DS.attr(),
  name: DS.attr(),
  nametype: DS.attr(),
  recclass: DS.attr(),
  reclat: DS.attr(),
  reclong: DS.attr(),
  year: DS.attr()
});

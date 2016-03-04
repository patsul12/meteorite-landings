import Ember from 'ember';

export function formatYear(params) {
  if (params[0]) {
    var Year = Ember.Object.extend({
      year: null,
      formatted: Ember.computed('year', function() {
        return `${this.get('year').substring(0,4)}`;
      })
    });
    var year = Year.create({
      year: params[0]
    });
    return year.get('formatted');
  };
}

export default Ember.Helper.helper(formatYear);

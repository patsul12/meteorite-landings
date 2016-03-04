import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meteorite-info', 'Integration | Component | meteorite info', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{meteorite-info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#meteorite-info}}
      template block text
    {{/meteorite-info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

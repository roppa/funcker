const { test } = require('tape');
const curry = require('../../curry');
const compose = require('..');

test('Compose function', (assert) => {
  assert.equals(typeof compose, 'function', 'should exist');
  assert.end();
});

test('Compose function', (assert) => {
  const prefixDr = curry((prefix, name) => `${prefix} ${name}`)('Dr');
  const suffixBatchelor = curry((suffix, name) => `${name} ${suffix}`)('BSc');
  const suffixMasters = curry((suffix, name) => `${name} ${suffix}`)('MSc');
  const suffixDoctor = curry((suffix, name) => `${name} ${suffix}`)('PhD');
  const composeName = compose([prefixDr, suffixDoctor, suffixMasters, suffixBatchelor]);

  assert.equals(composeName('Bob Johnson'), 'Dr Bob Johnson BSc MSc PhD', 'should compose name');
  assert.end();
});

const test = require('tape').test;
const funker = require('..');

test('The get function', (assert) => {
  const people = [
    { name: 'bob', age: 42 },
    { name: 'smiffy', age: 21 },
    { name: 'jonesy' },
  ];

  const names = ['bob', 'smiffy', 'jonesy'];

  assert.deepEqual(people.map(funker.get('name')), names, 'should get name attributes from obect');
  assert.end();
});

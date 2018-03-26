const { test } = require('tape');
const only = require('..');

const tad = {
  name: 'Tad',
  age: 42,
  password: 'encryptedpassword',
  address: {
    street: '12 My Street',
  },
  timeline: [0, 1, 2],
};

const genericUser = {
  name: 'Tad',
  age: 42,
  address: {
    street: '12 My Street',
  },
  timeline: [0, 1, 2],
};

test('The only function', (assert) => {
  const getUserFields = only('address timeline name age');
  assert.deepEquals(getUserFields(tad), genericUser, 'should only return object with name and age');
  assert.end();
});

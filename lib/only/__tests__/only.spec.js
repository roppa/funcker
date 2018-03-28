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

describe('Only', () => {
  test('should only return object with name and age', () => {
    const getUserFields = only('address timeline name age');
    expect(getUserFields(tad)).toEqual(genericUser);
  });
});

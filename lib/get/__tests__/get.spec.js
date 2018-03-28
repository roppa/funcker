const get = require('..');

describe('Get', () => {
  test('should get name attributes from obect', () => {
    const people = [
      { name: 'bob', age: 42 },
      { name: 'smiffy', age: 21 },
      { name: 'jonesy' },
    ];
    const names = ['bob', 'smiffy', 'jonesy'];

    expect(people.map(get('name'))).toEqual(names);
  });
});

const curry = require('../../curry');
const compose = require('..');

describe('Compose', () => {
  test('should compose name', () => {
    const prefixDr = curry((prefix, name) => `${prefix} ${name}`)('Dr');
    const suffixBatchelor = curry((suffix, name) => `${name} ${suffix}`)('BSc');
    const suffixMasters = curry((suffix, name) => `${name} ${suffix}`)('MSc');
    const suffixDoctor = curry((suffix, name) => `${name} ${suffix}`)('PhD');
    const composeName = compose([prefixDr, suffixDoctor, suffixMasters, suffixBatchelor]);

    expect(composeName('Bob Johnson')).toEqual('Dr Bob Johnson BSc MSc PhD');
  });
});

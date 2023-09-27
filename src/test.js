const add = require('./index');

test('returns correct result', () => {
    expect(add(2, 3)).toEqual(5);
});

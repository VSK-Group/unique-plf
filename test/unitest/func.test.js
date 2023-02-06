const sum       = require('../../utils/sum');
const reduce    = require('../../utils/reduce');

test('SUM: adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('REDUCE: adds 2 - 1 to equal 1', () => {
    expect(reduce(2, 1)).toBe(1);
  });
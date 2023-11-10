
const filtersArray = require('./filters'); 

test('Cut ededler ucun', () => {
  const inputArray = [1, 2, 3, 4, 5, 6];
  const resultArray = filtersArray(inputArray);
  expect(resultArray).toEqual([2, 4, 6]);
});

test('Arrayin bos olub olmamasi ucun', () => {
  const emptyArray = [];
  const resultEmptyArray = filtersArray(emptyArray);
  expect(resultEmptyArray).toBeNull();
});

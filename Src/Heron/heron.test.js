const Heron = require("./heron");

test('Ucbucagin sahesini hesablamaq ucun', () => {
    expect(Heron(3, 4, 5)).toBe(6);
  });

  test('Tereflerine gore test', () => {
    expect(Heron(2, 2, 5)).toBeNaN();
  });
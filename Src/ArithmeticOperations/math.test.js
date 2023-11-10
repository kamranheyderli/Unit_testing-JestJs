const { addition, subtraction, multiplication, division } = require("./math");


test('Toplama', () => {
    expect(addition(3, 3)).toBe(6);
});

test('Cixma', () => {
    expect(subtraction(3, 3)).toBe(0);
});

test('Vurma', () => {
    expect(multiplication(3, 3)).toBe(9);
});

test('Bölme', () => {
    expect(division(3, 3)).toBe(1);
    expect(division(3, 0)).toBe("Sifira bölmek olmaz!");
});
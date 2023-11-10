const calculateDateDifference = require("./date");

test('Date ler arasinda ferq', () => {
    const date1 = new Date('2023-11-20');
    const date2 = new Date('2023-11-11');
    const result = calculateDateDifference(date1, date2);
    expect(result).toBe(9); 
});
const reverseText = require("./reverse");

test("ReverseText", () => {
    expect(reverseText("Kamran")).toBe("narmaK");
    expect(reverseText('12345')).toBe('54321');
});


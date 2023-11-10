const isValidEmail = require("./checker");

test("Email yoxlanmasi", () => {
    expect(isValidEmail('kamranheyderli049@gmail.com')).toBe(true);
    expect(isValidEmail('kamran_heyderli049_gmail.com')).toBe(false);


})
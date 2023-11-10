// Toplama 
function addition(number1, number2) {
    return number1 + number2;
}

// Çıxma
function subtraction(number1, number2) {
    return number1 - number2;
}

// Vurma
function multiplication(number1, number2) {
    return number1 * number2;
}

// Bölme 
function division(number1, number2) {

    if (number2 !== 0) {
        return number1 / number2;
    } else {
        return "Sifira bölmek olmaz!";
    }
}

module.exports = {
    addition, subtraction, multiplication, division
}
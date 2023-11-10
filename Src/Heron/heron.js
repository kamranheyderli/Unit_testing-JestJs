function Heron(a, b, c) {
    
    let s = (a + b + c) / 2;

  
    let sahe = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return sahe;
}

module.exports = Heron
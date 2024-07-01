function mutiply(N) {
    let digits = N.toString();
    let product = digits.split('').reduce((acc, digit) => acc * parseInt(digit), 1);
    return product;
}
let N = 5244;
console.log(mutiply(N)); 

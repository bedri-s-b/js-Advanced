function commonDivisor(num1, num2) {
    let result = 1;

    const biggeerNumber = num1 > num2 ? num1 : num2;

    for (let i = biggeerNumber; i > 1; i = i - 1) {
        if (num1 % i == 0 && num2 % i == 0) {
            return i
        }

    }
    return result;

}

console.log(commonDivisor(15, 5));
console.log(commonDivisor(2154, 458));
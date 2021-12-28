function validityChecker(x1, y1, x2, y2) {

    let result = '';
    let first = validOrNotValid(x1, y1, 0, 0);
    let second = validOrNotValid(x2, y2, 0, 0);
    let third = validOrNotValid(x1, y1, x2, y2);

    function validOrNotValid(x1, y1, x2, y2) {
        let currentResult = Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))
        result += Number.isInteger(currentResult) ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid\n`
            : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid\n`
    }

    return result;
}

console.log(validityChecker(3, 0, 0, 4))
console.log(validityChecker(2, 1, 1, 1))
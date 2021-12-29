function lastKNumbersSequence(n, k) {

    let result = [1];

    for (let indexN = 0; indexN < n - 1; indexN++) {
        let current = 0;
        for (let indexK = indexN + 1 - k; indexK <= indexN; indexK++) {
            // current += Number.isInteger(result[indexK]) ? result[indexK] : 0;
            let cuurentResult = result[indexK];

            if (Number.isInteger(cuurentResult)) {
                current += cuurentResult
            }
        }
        result.push(current);

    }

    return result;

}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
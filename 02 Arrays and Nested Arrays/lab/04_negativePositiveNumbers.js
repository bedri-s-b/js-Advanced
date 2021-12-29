function negativePositiveNumbers(arr){
    const result = [];

    for (const num of arr) {
        if(num < 0){
            result.unshift(num)
        }else{
            result.push(num)
        }
    }

    return result.join('\n')
}

console.log(negativePositiveNumbers([7, -2, 8, 9]))
console.log(negativePositiveNumbers([3, -2, 0, -1]))
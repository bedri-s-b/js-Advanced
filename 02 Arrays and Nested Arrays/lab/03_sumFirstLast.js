function sumFirstLast(arr){
    return arr.length > 1 ? +arr[0] + +arr[arr.length - 1] : arr[0]
}

console.log(sumFirstLast(['20', '30', '40']))
console.log(sumFirstLast(['20']))
console.log(sumFirstLast(['5', '10']))
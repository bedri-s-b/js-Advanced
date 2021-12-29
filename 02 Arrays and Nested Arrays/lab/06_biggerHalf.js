function biggerHalf(arr) {
    arr.sort((a, b) => b - a);

    return arr.length % 2 == 0 ? arr.slice(0, arr.length / 2).reverse()
        : arr.slice(0, (arr.length + 1) / 2).reverse()
}

console.log(biggerHalf([4, 7, 2, 5]))
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))
function biggestElement(arr){
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (const ar of arr) {
       const currentMax = Math.max(...ar);
        biggestElement = currentMax > biggestElement ? currentMax : biggestElement;
    }

    return biggestElement;
    
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]))
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))
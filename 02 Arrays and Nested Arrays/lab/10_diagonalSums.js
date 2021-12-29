function diagonalSums(matrix) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += matrix[i][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        secondDiagonal += matrix[i][matrix[i].length - 1 - i]
    }

    return firstDiagonal + ' ' +secondDiagonal;
}

console.log(diagonalSums([[20, 40],
[10, 60]]))

console.log(diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]))
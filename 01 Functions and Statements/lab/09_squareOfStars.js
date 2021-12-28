function squareOfStars(num){
    let row = '* '.repeat(num).trim();
    for (let index = 0; index < num; index++) {
       console.log(row);
    }
}

squareOfStars(5);
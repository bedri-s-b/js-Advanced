function sumOfNumbers(n,m){
    let result = 0;

    for (let index = +n; index <= +m; index++) {
           result += index;
    }

    console.log(result);
}

sumOfNumbers('-8', '20' );
function aggregateElements(arr){
    let sum =arr.reduce((a,b) => a+b);
    console.log(sum)
    let sum1 =arr.reduce((a,b) => a+1/b,0);
    console.log(sum1.toFixed(4))
    let join =arr.join('');
    console.log(join)

}

aggregateElements([2, 4, 8, 16])
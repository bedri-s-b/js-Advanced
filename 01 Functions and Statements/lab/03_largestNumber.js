function largestNumber(...number){
    let largest = -10000000000;
    number.forEach(n => {
        if(n > largest){
            largest = n;
        }
    })
    console.log(`The largest number is ${largest}.`)
}

largestNumber(-3, -5, -22.5)
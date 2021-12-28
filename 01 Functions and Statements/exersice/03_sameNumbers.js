function sameNumbers(number){
    let numberInStr = number.toString();
    let sameNumber = true;
    let result = 0;
    const numLegth = numberInStr.length; 

    for (let i = 0; i < numLegth; i++) {
        if (numberInStr[i] !== numberInStr[i + 1] && i !== numLegth - 1) {
            sameNumber = false;
        }
        result += Number(numberInStr[i])
    }

    return sameNumber + '\n' + result;

}

console.log(sameNumbers(2222222))
console.log(sameNumbers(1234))
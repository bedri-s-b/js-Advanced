function cookingByNumbers(number, ...arr) {
    let currnetNumber = Number(number);
    let result = '';
    for (const command of arr) {
        switch (command) {
            case 'chop':
                currnetNumber /= 2
                break;
            case 'dice':
                currnetNumber = Math.sqrt(currnetNumber)
                break;
            case 'spice':
                currnetNumber += 1
                break;
            case 'bake':
                currnetNumber *= 3
                break;
            case 'fillet':
                currnetNumber -= currnetNumber * 0.2;
                break;
        }
        result += `${currnetNumber}\n`;
    }
    return result;
}

console.log(cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop'))
console.log(cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet'))
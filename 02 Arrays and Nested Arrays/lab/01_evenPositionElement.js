function evenPosition(elements) {
    let result = [];

    for (let i = 0; i < elements.length; i = i + 2) {
        result.push(elements[i])
    }

    return result.join(' ');
}

console.log(evenPosition(['20', '30', '40', '50', '60']))
console.log(evenPosition(['5', '10']))
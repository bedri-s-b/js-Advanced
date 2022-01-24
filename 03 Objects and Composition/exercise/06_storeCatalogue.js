function storeCatalogue(arr) {

    let prosucts = arr.map((e) => {
        let [productName, productPrice] = e.split(' : ');
        return { productName, productPrice }
    });

    prosucts.sort((a, b) => a.productName.localeCompare(b.productName));

    let result = {};

    for (let i = 0; i < prosucts.length; i++) {
        let char = prosucts[i].productName[0].toUpperCase();
        let sameChar = Object.keys(result).some(k => k === char);
        if (!sameChar) {
            result[char] = [];
            console.log(char)
        }
        result[char].push(prosucts[i])
        console.log(` ${prosucts[i].productName}: ${prosucts[i].productPrice}`)

    }

}

console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']

));
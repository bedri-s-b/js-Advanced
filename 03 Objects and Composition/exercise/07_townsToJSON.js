function townsToJSON(arr) {
    let townInfo = arr.map(e => e.split(' | '));
    townInfo.shift();

    

    let towns = [];

    for (let t of townInfo) {
        let town = {};
        town.Town = t[0].replace('| ', '')
        let latitude = Number(t[1]).toFixed(2);
        town.Latitude = parseFloat(latitude)
        let longitude = Number(t[2].replace(' |', ''));
        town.Longitude = +longitude.toFixed(2); 

        towns.push(town)
    }

    return JSON.stringify(towns);


}

console.log(townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
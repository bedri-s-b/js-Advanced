function townPopulation(arr) {
    let resultTown = {};

    arr.forEach(element => {
        let [townName, population] = element.split(' <-> ');
        population = Number(population);
        if (!resultTown[townName]) {
            resultTown[townName] = 0;
        }
        resultTown[townName] += population;
    });

    Object.keys(resultTown).forEach((k) => console.log(`${k} : ${resultTown[k]}`))
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
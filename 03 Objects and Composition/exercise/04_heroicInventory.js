function heroicInventory(arr) {

    let hero = {};

    let heroes = [];

    for (let i = 0; i < arr.length; i++) {
        let [name, level, ...items] = arr[i].split(' / ');
        hero = {
            name,
            level: Number(level),
            items
        }

        if (items.length) {
            hero.items = items[0].split(', ');
        }

        heroes.push(hero)
    }


    return JSON.stringify(heroes);



}

console.log(heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
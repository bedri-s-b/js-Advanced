function pieceOfPie(arr, pie1, pie2) {
    const indexFirstPie = arr.indexOf(pie1);
    const indexSecondPie = arr.indexOf(pie2) + 1;
    return arr.slice(indexFirstPie, indexSecondPie)

}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'))
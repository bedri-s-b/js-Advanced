function fruit(fruit, weightGr, priceKg) {
    const weightKg = weightGr / 1000;
    return `I need $${(weightKg * priceKg).toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));
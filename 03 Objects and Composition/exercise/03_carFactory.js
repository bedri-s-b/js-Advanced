function carFactory(obj){
    let result = {};

    result.model = obj.model;
     let engine = {};

    if (obj.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    }else if (obj.power <= 120 ) {
        engine.power = 120;
        engine.volume = 2400;
    }else if (obj.power <= 200 ) {
        engine.power = 200;
        engine.volume = 3500;
    }
    
    result.engine = engine;

    let carriage = {};

    carriage.type = obj.carriage;
    carriage.color = obj.color;

    result.carriage = carriage;

   let wheelsize = obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize;

   let wheels = [wheelsize,wheelsize,wheelsize,wheelsize];

   result.wheels = wheels;

   return result;l

}

console.log(carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));
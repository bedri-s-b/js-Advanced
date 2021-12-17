function stingLegth(...input){
    let totalLength = 0;
    input.forEach(e => totalLength += e.length)
    console.log(totalLength)
    console.log(Math.floor(totalLength / input.length))
}

stingLegth('pasta', '5', '22.3')
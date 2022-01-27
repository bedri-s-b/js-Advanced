function extract(content) {
    let textElement = document.getElementById(content);
    let pattern = /\([A-z+, ]+\)/g;
    let match = textElement.textContent.match(pattern);

    let rest = [];

    for (const r of match) {
        let result = [...r];
        result.shift();
        result.pop()
        rest.push(result.join(''))

    }

    console.log(rest.join('; '));
}
function wordsUppercase(words) {
    return words.match(/\w+/g).join(", ").toLocaleUpperCase()


}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));
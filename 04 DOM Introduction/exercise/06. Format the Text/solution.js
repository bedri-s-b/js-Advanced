function solve() {
  let textInput = document.querySelector('#input').value;
  let outputElemnt = document.querySelector('#output')

  let sentences = textInput.split('.');

  sentences = sentences.filter(s => {
    s = s.trim();
    if (s) {
      return s;
    }
  }).map(s => {
    let r = [...s];
    r.push('.')
    return r.join('').trim()
  })





  for (let i = 0; i < sentences.length; i += 3) {
    let result = '';
    let p = document.createElement('p');
    if (sentences[i + 1] && sentences[i + 2]) {
      result = sentences[i] + '\n' + sentences[i + 1] + '\n' + sentences[i + 2]
    } else if (sentences[i + 1]) {
      result = sentences[i] + '\n' + sentences[i + 1]
    } else {
      result = sentences[i]
    }

    p.textContent = result;
    outputElemnt.appendChild(p)

  };

}
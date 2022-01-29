function solve() {
  let resultElement = document.querySelector('#result');

  let textInput = document.querySelector('#text').value;
  let namingConvention = document.querySelector('#naming-convention').value;

  let textMessage = [];

  switch (namingConvention) {
    case 'Camel Case':
      textMessage.push(textInput[0].toLowerCase());
      for (let i = 1; i < textInput.length; i++) {
        if (textInput[i] === ' ') {
          let currentChar = (textInput[i + 1]).toUpperCase();
          textMessage.push(currentChar)
          i++;
        } else {
          let currentChar = (textInput[i]).toLowerCase();
          textMessage.push(currentChar);
        }
      }
      textMessage = textMessage.join('');
      break
    case 'Pascal Case':
      textMessage.push(textInput[0].toUpperCase());
      for (let i = 1; i < textInput.length; i++) {
        if (textInput[i] === ' ') {
          let currentChar = (textInput[i + 1]).toUpperCase();
          textMessage.push(currentChar)
          i++;
        } else {
          let currentChar = (textInput[i]).toLowerCase();
          textMessage.push(currentChar);
        }
      }
      textMessage = textMessage.join('');
      break
    default: textMessage = 'Error!';
  }

  resultElement.textContent = textMessage;


}
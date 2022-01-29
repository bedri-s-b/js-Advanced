function subtract() {

    let numberElemntInputFirst = document.querySelector('#firstNumber');
    let numberElemntInputSecond = document.querySelector('#secondNumber');

    let firstNumber = Number(numberElemntInputFirst.value);
    let secondNimber = Number(numberElemntInputSecond.value);

    let divResultElemnt = document.querySelector('#result');

    divResultElemnt.textContent = firstNumber - secondNimber;
}
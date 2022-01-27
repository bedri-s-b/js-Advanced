function calc() {
   let firsElemnt = Number(document.querySelector('#num1').value);
   let secondElemnt = Number(document.querySelector('#num2').value);
   
   let result = document.querySelector('#sum');
   result.value = firsElemnt + secondElemnt;
}

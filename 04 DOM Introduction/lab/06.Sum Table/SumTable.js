function sumTable() {
    let numbersElemnts = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 0; i < numbersElemnts.length; i++) {
      let colsElemnt =  numbersElemnts[i].children[1];
        
      let numberCol = Number(colsElemnt.textContent)

      if(typeof numberCol === 'number' && !isNaN(numberCol)){
          sum += numberCol
      }
    }

    document.getElementById('sum').textContent = sum
    
}
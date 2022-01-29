function search() {
   let townsElments = document.querySelectorAll('#towns li');
   let searchElement = document.querySelector('#searchText');
   let resultElemnt = document.querySelector('#result');

   let searchWord = searchElement.value;

   let counMatch = 0;



   for (const town of townsElments) {

      let coincidence = town.textContent.includes(searchWord);

      if (coincidence) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         counMatch++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   resultElemnt.textContent = `${counMatch} matches found`
}

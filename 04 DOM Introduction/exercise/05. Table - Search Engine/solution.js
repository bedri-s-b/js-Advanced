function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rowsElments = document.querySelectorAll('.container tbody tr');
      let searchFieldElemnt = document.querySelector('#searchField');

      for (const row of rowsElments) {
         row.classList.remove('select')
      }

      for (const row of rowsElments) {
         if(row.textContent.includes(searchFieldElemnt.value)){
            row.classList.add('select')
         }
      }

      searchFieldElemnt.value = '';
   }
}
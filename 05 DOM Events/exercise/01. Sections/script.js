function create(words) {

   let parerntElemnt = document.querySelector('#content');

   let divs = words.map(x => {
      let p = document.createElement('p');
      p.textContent = x;
      p.style.display = 'none';
      let div = document.createElement('div');
      div.appendChild(p);
      parerntElemnt.appendChild(div);
      return div
   });

   divs.forEach(el => {
      el.addEventListener('click', (e) => {
         e.currentTarget.querySelector('p').style.display = 'block';

      })
   });


}
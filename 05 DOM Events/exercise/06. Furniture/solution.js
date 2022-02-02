function solve() {

  let textArrayElement = document.querySelector('#exercise > textarea:nth-child(2)');
  let tableElment = document.querySelector('#exercise > div > div > div > div > table');
  let buttonAddElements = document.querySelectorAll('tr td input[type="checkbox"]');
  let outPutELment = document.querySelector('#exercise > textarea:nth-child(5)');

  document.querySelector('#exercise > button:nth-child(3)').addEventListener('click', addProduct);


  function addProduct() {
    let products = JSON.parse(textArrayElement.value);
    for (const product of products) {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      let td4 = document.createElement('td');

      let img = document.createElement('img');
      img.setAttribute('src', product.img);
      td1.appendChild(img);
      tr.appendChild(td1)

      let p = document.createElement('p');
      p.textContent = product.name;
      td2.appendChild(p);
      tr.appendChild(td2);

      let p2 = document.createElement('p');
      p2.textContent = product.price;
      td3.appendChild(p2);
      tr.appendChild(td3);

      let p3 = document.createElement('p');
      p3.textContent = product.decFactor;
      td4.appendChild(p3);
      tr.appendChild(td4);

      let td5 = document.createElement('td');
      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');
      // input.disabled = true;
      td5.appendChild(input)
      tr.appendChild(td5);
      tableElment.appendChild(tr)
    }
    buttonAddElements = document.querySelectorAll('tr td input[type="checkbox"]');
    Array.from(buttonAddElements).forEach(b => {
      b.disabled = false;
      b.addEventListener('change', checkboxAddProduct)
    })

  }

  Array.from(buttonAddElements).forEach(b => {
    b.disabled = false;
    b.addEventListener('change', checkboxAddProduct)
  })

  function checkboxAddProduct(e) {
    let message = 'Bought furniture: ';
    let result = [];
    let totalPrice = 0;
    let avrFactor = 0;
    Array.from(buttonAddElements).forEach(b => {
      if (b.checked) {
        result.push(b.parentNode.parentNode.querySelector('p').textContent);
        totalPrice += Number(b.parentNode.parentNode.querySelector('td:nth-child(3) p').textContent);
        avrFactor += Number(b.parentNode.parentNode.querySelector('td:nth-child(4) p').textContent);
      }
    })
    console.log(avrFactor + ' ' + result.length);
    message += result.join(', ');
    message += '\nTotal price: ' + totalPrice;
    message += '\nAverage decoration factor: ' + (avrFactor / result.length);
    outPutELment.textContent = message;

  }

}
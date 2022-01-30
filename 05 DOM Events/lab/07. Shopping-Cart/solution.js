function solve() {
   let productsElemnts = document.querySelectorAll('.add-product');
   let textAreaElement = document.querySelector('body > div > textarea');
   let checkOutElement = document.querySelector('body > div > button');

   let listOfProducts = [];
   let totalPrice = 0;

   function onClick(e) {
      let currentDivProductElament = e.currentTarget.parentNode.parentNode;
      let title = currentDivProductElament.querySelector('.product-title').textContent;
      let price = Number(currentDivProductElament.querySelector('.product-line-price').textContent);
      totalPrice += price;
      listOfProducts.push(title);
      textAreaElement.textContent += `Added ${title} for ${price} to the cart.\n`;
   }

   Array.from(productsElemnts).forEach(p => p.addEventListener('click', onClick));

   checkOutElement.addEventListener('click', () =>
    textAreaElement.textContent += `You bought ${listOfProducts.join(', ')} for ${totalPrice.toFixed(2)}.`)

   // checkOutElement.addEventListener('click', () => {
   //    textAreaElement += `You bought ${listOfProducts.join(', ')} for ${totalPrice}.`
   // })
}  
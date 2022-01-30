function addItem() {
    let inputElment = document.querySelector('#newItemText');
    let itemsElment = document.querySelector('#items');

    let li = document.createElement('li');
    li.textContent = inputElment.value;

    itemsElment.appendChild(li)
    inputElment.value = '';

}
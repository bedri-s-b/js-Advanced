function addItem() {
    let addInputElment = document.querySelector('#newItemText');
    let itemsEments = document.querySelector('#items');

    let li = document.createElement('li');
    li.textContent = addInputElment.value;
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.setAttribute('href', '#');
    a.addEventListener('click', deleteItem);
    li.appendChild(a);
    itemsEments.appendChild(li);

    function deleteItem() {
        li.remove();
    }



    addInputElment.value = '';
}
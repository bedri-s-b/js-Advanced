function addItem() {
    let newItemTextElement = document.querySelector('#newItemText');
    let newItemValueElement = document.querySelector('#newItemValue');
    let selectElement = document.querySelector('#menu');

    let text = newItemTextElement.value;
    let value = newItemValueElement.value;

    let option = document.createElement('option');

    option.textContent = text;
    option.value = value;

    selectElement.appendChild(option)


    newItemTextElement.value = ''
    newItemValueElement.value = ''
}
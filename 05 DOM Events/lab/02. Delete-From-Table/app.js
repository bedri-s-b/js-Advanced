function deleteByEmail() {
    let inputEmailElemnt = document.querySelector('input[name="email"][type="text"]');
    let tbodyElemnts = document.querySelectorAll('tbody td:nth-child(even)');
    let resultElment = document.querySelector('#result');

    let tbody = Array.from(tbodyElemnts);

    let row = tbody.find(x => x.textContent === inputEmailElemnt.value);
    let resultMessage = '';

    if (row) {
        let tr = row.parentNode;
        tr.parentNode.removeChild(tr);
        resultMessage = 'Deleted.';
    } else {
        resultMessage = 'Not found.';
    }

    resultElment.textContent = resultMessage;

    inputEmailElemnt.value = '';
}
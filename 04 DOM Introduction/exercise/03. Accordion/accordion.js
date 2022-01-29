function toggle() {
    let moreButtonElement = document.querySelector('#accordion .button');
    let divExtraElemnt = document.querySelector('#extra');

    let currentCaseOnButton = moreButtonElement.textContent;

    if (currentCaseOnButton == 'More') {
        divExtraElemnt.style.display = 'block'
        moreButtonElement.textContent = 'Less';
    } else {
        divExtraElemnt.style.display = 'none'
        moreButtonElement.textContent = 'More';
    }
}
function lockedProfile() {
    let profilesElements = document.querySelectorAll('.profile');

    Array.from(profilesElements).forEach(p => p.querySelector('button').addEventListener('click', onClickButton))

    function onClickButton(e) {
        let parent = e.currentTarget.parentNode;
        let locked = parent.querySelector('input[value="lock"]').checked;
        let showHideElement = parent.querySelector('button');

        console.log(showHideElement.textContent);

        if (!locked && showHideElement.textContent == 'Show more') {
            parent.querySelector('div').style.display = 'block';
            showHideElement.textContent = 'Hide it';
        } else if (!locked && showHideElement.textContent !== 'Show more') {
            parent.querySelector('div').style.display = 'none';
            showHideElement.textContent = 'Show more';
        }
    }

}
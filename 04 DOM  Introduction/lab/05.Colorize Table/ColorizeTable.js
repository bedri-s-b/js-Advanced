function colorize() {
    let tableElements = document.querySelectorAll('table tr');

    let index = 0;
    for (const row of tableElements) {
        index++;
        if (index % 2 == 0) {
            row.style.background = 'teal';
        }
    }
}
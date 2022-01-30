function attachGradientEvents() {
    let gradient = document.querySelector('#gradient');
    gradient.addEventListener('mousemove', (e) => {
        let power = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        document.getElementById('result').textContent = power + '%';
    });
}
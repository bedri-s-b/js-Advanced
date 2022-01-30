function validate() {
    const input = document.getElementById("email");

    input.addEventListener('change', (e) => {
        let inputEmail = e.currentTarget.value;

        if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(inputEmail)) {
            e.currentTarget.className = "";
        } else {
            e.currentTarget.className = "error"
        
        }
    })

}
function encodeAndDecodeMessages() {
    let textSnedElememnt = document.querySelector('div:nth-of-type(1) textarea');
    let receivedElment = document.querySelector('div:nth-of-type(2) textarea');
    let encodeButtonElment = document.querySelector('div:nth-of-type(1) button');
    let decodeButtonElment = document.querySelector('div:nth-of-type(2) button');

    encodeButtonElment.addEventListener('click', function () {
        let messageSent = textSnedElememnt.value;
        let encodeMessage = encode(messageSent);
        receivedElment.value = encodeMessage;
        textSnedElememnt.value = '';
    });

    decodeButtonElment.addEventListener('click', () => {
        let messageReceive = receivedElment.value;
        let decodeMessage = decode(messageReceive);
        receivedElment.value = decodeMessage;
    })

    function decode(message) {
        let result = '';
        for (let i = 0; i < message.length; i++) {
            result += String.fromCharCode(message[i].charCodeAt(0) - 1);
        }
        return result;
    }

    function encode(message) {
        let result = '';
        for (let i = 0; i < message.length; i++) {
            result += String.fromCharCode(message[i].charCodeAt(0) + 1);
        }
        return result;
    }


}


function attachEventsListeners() {

    let inputTimeElements = document.querySelectorAll('main  div input:nth-child(odd)');
    let daysElemnt = document.querySelector('#days');
    let hoursElemnt = document.querySelector('#hours');
    let minutesElemnt = document.querySelector('#minutes');
    let secondsElemnt = document.querySelector('#seconds');

    let time = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        let days = value / time[unit]
        return {
            days: days,
            hours: days * time.hours,
            minutes: days * time.minutes,
            seconds: days * time.seconds
        }
    }



    Array.from(inputTimeElements).forEach(i => i.addEventListener('click', (e) => {
        let timeUnit = e.currentTarget.parentNode.querySelector('input').getAttribute('id');
        let timeValue = Number(e.currentTarget.parentNode.querySelector('input').value);
        let time = convert(timeValue, timeUnit);
        let currentTarget = e.currentTarget.parentNode;
        daysElemnt.value = time.days;
        hoursElemnt.value = time.hours;
        minutesElemnt.value = time.minutes;
        secondsElemnt.value = time.seconds;

    }
    ))
}
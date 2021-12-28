function previousDay(year, month, day) {
    const today = new Date(year, month, day)
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)



    return yesterday.getFullYear() + '-' + yesterday.getMonth() + '-' + yesterday.getDate()
}

console.log(previousDay(2016, 9, 30))
console.log(previousDay(2016, 10, 1))

var moment = require('moment')
function newDate() {
    var days = document.querySelector('#days')
    var hours = document.querySelector('#hours')
    var minutes = document.querySelector('#minuts')
    var seconds = document.querySelector('#seconds')
    
    var endDate = "2019-12-25"
    var timeLife = moment(endDate) - moment()
    timeLife = moment.duration(timeLife, "milliseconds")
    days.textContent = timeLife.days()
    hours.textContent = timeLife.hours()
    minutes.textContent = timeLife.minutes()
    seconds.textContent = timeLife.seconds()

}

setInterval(newDate, 1000)






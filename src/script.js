// selecting our elements
var hourEl = document.getElementsByClassName("hr-Bar")[0];
var minuteEl = document.getElementsByClassName("min-Bar")[0];
var secondEl = document.getElementsByClassName("sec-Bar")[0];
var timeEl = document.getElementsByClassName("time-El")[0];
var dateEl = document.getElementsByClassName(".date-El")[0];
var dayEl = document.getElementsByClassName("day-El")[0];
var toggleBtn = document.getElementsByClassName("dark-Light-Btn")[0];
// here is our functions
var clock = function () {
    // getting date from Date mathod
    var date = new Date();
    var day = date.getDate();
    var hour = date.getHours() % 12 || 12;
    var minutes = date.getMinutes();
    var dayNumber = date.getDay();
    var dayName;
    // i could do this in object but used this mothed for practsing purposes
    switch (dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day";
    }
    console.log(dayName);
    timeEl.textContent = "".concat(hour, " : ").concat(minutes);
    dateEl = dayEl.textContent = day;
};
clock();
// here is our eventlisnters
// setInterval(clock, 1000);

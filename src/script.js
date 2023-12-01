// selecting our elements
var hourEl = document.getElementsByClassName("hr-Bar")[0];
var minuteEl = document.getElementsByClassName("min-Bar")[0];
var secondEl = document.getElementsByClassName("sec-Bar")[0];
var timeEl = document.getElementsByClassName("time-El")[0];
var dateEl = document.getElementsByClassName("date-El")[0];
var dayEl = document.getElementsByClassName("day-El")[0];
var toggleBtn = document.getElementsByClassName("dark-Light-Btn")[0];
toggleBtn.textContent = "Light Mode";
// here is our functions
var clock = function () {
    // getting date from Date mathod
    var date = new Date();
    var day = date.getDate();
    var hour = date.getHours() % 12 || 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // i could do this in object but used this mothed for practsing purposes
    // this case method is for days names
    var dayNumber = date.getDay();
    var dayName;
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
    // this case method is for months names
    var monthNumber = date.getMonth();
    var monthName;
    switch (monthNumber) {
        case 0:
            monthName = "Jan";
            break;
        case 1:
            monthName = "Feb";
            break;
        case 2:
            monthName = "Mar";
            break;
        case 3:
            monthName = "Apr";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "Aug";
            break;
        case 8:
            monthName = "Sep";
            break;
        case 9:
            monthName = "Oct";
            break;
        case 10:
            monthName = "Nov";
            break;
        case 11:
            monthName = "Dec";
            break;
        default:
            monthName = "Invalid month";
    }
    // if else lader
    if (minutes > 9) {
        timeEl.textContent = "".concat(hour, " : ").concat(minutes);
    }
    else {
        timeEl.textContent = "".concat(hour, " : 0").concat(minutes);
    }
    // dynamiclly element changing rotation for hour, min, sec.
    // our hours
    hourEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(hour, 0, 11, 0, 360), "deg)");
    // our mints
    minuteEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(minutes, 0, 59, 0, 360), "deg)");
    // our seconds
    secondEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(seconds, 0, 59, 0, 360), "deg)");
    // setting the dates dynamclly
    dayEl.textContent = "".concat(day);
    dateEl.textContent = "".concat(dayName, ", ").concat(monthName);
    // this is test console.log
    // console.log(hour, minutes, seconds);
};
// our scale function
var scale = function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
// our change theme function
var changeTheme = function () {
    var body = document.querySelector("body");
    var hr = document.querySelector("hr");
    if (body.style.backgroundColor === "white" ||
        body.style.backgroundColor === "") {
        body.style.backgroundColor = "black";
        hourEl.style.backgroundColor = "white";
        minuteEl.style.backgroundColor = "white";
        toggleBtn.style.backgroundColor = "white";
        toggleBtn.style.color = "black";
        toggleBtn.textContent = "Light Mode";
        dayEl.style.backgroundColor = "white";
        dayEl.style.color = "black";
        timeEl.style.color = "white";
        hr.style.color = "white";
    }
    else {
        body.style.backgroundColor = "white";
        hourEl.style.backgroundColor = "black";
        minuteEl.style.backgroundColor = "black";
        toggleBtn.style.backgroundColor = "black";
        toggleBtn.style.color = "white";
        toggleBtn.textContent = "Dark Mode";
        dayEl.style.backgroundColor = "black";
        dayEl.style.color = "white";
        timeEl.style.color = "black";
        hr.style.color = "black";
    }
};
// here is our eventlisnters each 1 second fire the function again
setInterval(clock, 1000);
// here is our change theme color btn
toggleBtn.addEventListener("click", changeTheme);

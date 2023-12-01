// selecting our elements
const hourEl: any | null = document.getElementsByClassName("hr-Bar")[0];
const minuteEl: any | null = document.getElementsByClassName("min-Bar")[0];
const secondEl: any | null = document.getElementsByClassName("sec-Bar")[0];
const timeEl: any | null = document.getElementsByClassName("time-El")[0];
let dateEl: any = document.getElementsByClassName("date-El")[0];
const dayEl: any | null = document.getElementsByClassName("day-El")[0];
const toggleBtn = document.getElementsByClassName(
  "dark-Light-Btn"
)[0] as HTMLElement;

toggleBtn.textContent = "Light Mode";
// here is our functions
const clock = () => {
  // getting date from Date mathod
  const date = new Date();
  const day = date.getDate();
  const hour = date.getHours() % 12 || 12;
  var minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // i could do this in object but used this mothed for practsing purposes
  // this case method is for days names

  const dayNumber: number = date.getDay();
  let dayName: string;

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
  const monthNumber: number = date.getMonth();
  let monthName: string;

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
    timeEl.textContent = `${hour} : ${minutes}`;
  } else {
    timeEl.textContent = `${hour} : 0${minutes}`;
  }

  // dynamiclly element changing rotation for hour, min, sec.

  // our hours
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hour,
    0,
    11,
    0,
    360
  )}deg)`;

  // our mints
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  // our seconds
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  // setting the dates dynamclly
  dayEl.textContent = `${day}`;
  dateEl.textContent = `${dayName}, ${monthName}`;

  // this is test console.log
  // console.log(hour, minutes, seconds);
};

// our scale function
const scale = (
  num: any,
  in_min: any,
  in_max: any,
  out_min: any,
  out_max: any
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// our change theme function
const changeTheme = (): any => {
  const body: any = document.querySelector("body");
  const hr: any = document.querySelector("hr");
  if (
    body.style.backgroundColor === "white" ||
    body.style.backgroundColor === ""
  ) {
    body.style.backgroundColor = `black`;
    hourEl.style.backgroundColor = "white";
    minuteEl.style.backgroundColor = "white";
    toggleBtn.style.backgroundColor = "white";
    toggleBtn.style.color = "black";
    toggleBtn.textContent = "Light Mode";
    dayEl.style.backgroundColor = "white";
    dayEl.style.color = "black";
    timeEl.style.color = "white";
    hr.style.color = "white";
  } else {
    body.style.backgroundColor = `white`;
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

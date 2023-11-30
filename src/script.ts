// selecting our elements
const hourEl: any | null = document.getElementsByClassName("hr-Bar")[0];
const minuteEl: any | null = document.getElementsByClassName("min-Bar")[0];
const secondEl: any | null = document.getElementsByClassName("sec-Bar")[0];
const timeEl: any | null = document.getElementsByClassName("time-El")[0];
const dateEl: any | null = document.getElementsByClassName(".date-El")[0];
const dayEl: any | null = document.getElementsByClassName("day-El")[0];
const toggleBtn = document.getElementsByClassName(
  "dark-Light-Btn"
)[0] as HTMLElement;

// here is our functions
const clock = () => {
  // getting date from Date mathod
  const date = new Date();

  const day = date.getDate();
  const hour = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const dayNumber: number = date.getDay();
  let dayName: string;

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
  timeEl.textContent = `${hour} : ${minutes}`;
  dateEl = dayEl.textContent = day;
};

clock();

// here is our eventlisnters
// setInterval(clock, 1000);

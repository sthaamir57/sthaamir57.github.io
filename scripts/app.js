const today = new Date();
const day = today.getDay();
const timeNow = today.getHours();
const firstSubjects = document.querySelector(".first-subjects");
const lastSubjects = document.querySelector(".last-subjects");
const firstThreeDays = document.querySelector(".first-three-days");
const lastThreeDays = document.querySelector(".last-three-days");
const todaySubjects = document.querySelector(".today-sub");
const subjects = [
  "OOP",
  "Statistics",
  "Discrete Maths",
  "Microprocessor",
  "Mathematics II",
];
const links = [
  "https://us04web.zoom.us/j/75109118527?pwd=YzRLZ3J4UDYyclR0aTl6U3NzL2VZdz09",
  "https://us04web.zoom.us/j/3074734435?pwd=UzcwWTNkNEg1TWgzY1ZaRU5rTFQwQT09",
  "https://us04web.zoom.us/j/76242064707?pwd=SHYzdUNpamRVdFg3NDB5M3B6QU9PQT09",
  // "https://zoom.us/j/7782545356?pwd=c3N2SWNQaFFWSFJIaU5ITTFYVmdGQT09",
  "https://meet.google.com/kcq-uvjo-wns",
  "https://us04web.zoom.us/j/71948430193?pwd=UnJvU1pEYjVHbmo2WmxsOEc3a3JXQT09",
];
const hide1 = document.querySelector(".hide-1");
const hide2 = document.querySelector(".hide-2");

loadAllFunctions();

function loadAllFunctions() {
  display();
  // document.addEventListener("DOMContentLoaded", displayTime);
  displayTime();
  daysLeftForExam();
}

function display() {
  if (day === 6) {
    console.log("Today is HOliday");
    alert("NO classes today");
  } else if (day === 0 || day === 1 || day === 2) {
    // firstSubjects.classList.remove("opacity-0");
    subFirst(day);
    // if (timeNow === 13 || timeNow === 14) {
    //   alert("OOP password is in Sir's fb group.");
    // }
  } else {
    // lastSubjects.classList.remove("opacity-0");
    //alert("Try maths 2nd link if 1st one doesn't work");
    subLast(day);
  }
}

function subFirst(day) {
  let element = `<ul class="subjects s1">
  <li><a href="${links[0]}">${subjects[0]}</a></li>
        <li><a href="${links[1]}">${subjects[1]}</a></li>
        <li><a href="${links[2]}">${subjects[2]}</a></li>
</ul>`;
  hide1.style.display = "none";
  firstThreeDays.children[day].classList.replace("opacity-0", "opacity-1");
  firstThreeDays.children[day].children[1].innerHTML = `${element}`;
}

function subLast(day) {
  let element = `<ul class="subjects s2">
        <li><a href="${links[3]}">${subjects[3]}</a></li>
        <li><a href="${links[4]}">${subjects[4]}</a></li>
</ul>`;
  hide2.style.display = "none";
  lastThreeDays.children[day - 3].classList.replace("opacity-0", "opacity-1");
  lastThreeDays.children[day - 3].children[1].innerHTML = `${element}`;
}

function displayTime() {
  // const Holder = document.querySelector(".holder");
  // const hourHolder = document.querySelector(".hour-holder");
  // const minHolder = document.querySelector(".min-holder");
  // const secHolder = document.querySelector(".sec-holder");
  dis();
  function dis() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    hour = convertTime(hour);
    minute = checkTime(minute);
    seconds = checkTime(seconds);
    // hourHolder.innerHTML = `${hour}`;
    // minHolder.innerHTML = `${minute}`;
    // secHolder.innerHTML = `${seconds}`;
    console.log(hour);
    console.log(minute);
    console.log(seconds);

    // setInterval(dis, 500);
  }

  function convertTime(h) {
    if (h > 12) {
      h = h - 12;
    }

    h = checkTime(h);
    return h;
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}

function daysLeftForExam() {
  // let countDownDate = new Date("Jan 15, 2021 00:00:00").getTime();
  let countDownDate = new Date("Jan 15, 2021 12:00:00 GMT+0545").getTime();
  // let countDownDate2 = new Date("Jan 15, 2021 00:00:00").getTime();

  console.log(countDownDate);
  // console.log(countDownDate2);

  // Get today's date and time
  let now = new Date().getTime();
  // console.log(now);
  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log(days);
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(hours);
  console.log(minutes);
  console.log(seconds);

  document.querySelector(".days-left").innerHTML = `${days} D ${hours} H`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById(".days-left").innerHTML = "TODAY";
  }
}

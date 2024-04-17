`use strict`;

const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

// getting acess to the btn

const btn = document.getElementById("calculate-btn");

// Creating a date object to get acess to the current year, month and day

const totalMonths = 12;
const totalDays = 30;

// ****************************
const now = new Date();
const currentDay = now.getDate();
const currentMonth = now.getMonth() + 1;
const currentYear = now.getFullYear();

// calculating the correct age of the person

btn.addEventListener("click", (e) => {
  // calculating the current age of person.
  const userInputDay = Number(inputDay.value);
  const userInputMonth = Number(inputMonth.value);
  const userInputYear = Number(inputYear.value);

  const daysInMonth = new Date(userInputYear, userInputMonth, 0).getDate();

  if (
    userInputDay > daysInMonth ||
    userInputMonth > totalMonths ||
    userInputYear > currentYear
  ) {
    document.querySelectorAll(".day").forEach((day) => {
      day.classList.add("error-date");
    });
    alert("Enter valid date");
  } else {
    document.querySelectorAll(".day").forEach((day) => {
      day.classList.remove("error-date");
    });
    let daysOld = totalDays - userInputDay + currentDay;
    let monthsOld = totalMonths - userInputMonth + currentMonth;
    let yearsOld = currentYear - userInputYear - 1;
    console.log(daysOld, monthsOld, yearsOld);
    if (daysOld >= 30) {
      monthsOld++;
      console.log(monthsOld);
      daysOld = Math.abs(totalDays - daysOld);
    }
    if (monthsOld >= 12) {
      yearsOld++;
      monthsOld = monthsOld - totalMonths;
    }
    if (yearsOld < 0) {
      yearsOld = 0;
    }
    // Updating UI WITH YEARS

    setTimeout(() => {
      const yearTracker = document.getElementById("year-tracker");
      yearTracker.textContent = "";
      const h1 = document.createElement("h1");
      h1.textContent = `${yearsOld} years`;
      yearTracker.appendChild(h1);
    }, "600");

    // UPDATING UI WITH MONTHS
    setTimeout(() => {
      const monthTracker = document.getElementById("month-tracker");
      monthTracker.textContent = "";
      const h2 = document.createElement("h1");
      h2.textContent = `${monthsOld} months`;
      monthTracker.appendChild(h2);
    }, "600");

    // Updating UI WITH DAYS
    setTimeout(() => {
      const dayTracker = document.getElementById("day-tracker");
      dayTracker.textContent = "";
      const h3 = document.createElement("h1");
      h3.textContent = `${daysOld} days`;
      dayTracker.appendChild(h3);
    }, "600");
  }
  inputDay.value = "";
  inputMonth.value = "";
  inputYear.value = "";
});

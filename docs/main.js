import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import WeekdayChecker from './js/weekday.js';

$(document).ready(function () {
  $("#dateForm").submit(function (event) {
    const inputMonth = $("#monthInput").val();
    const inputDay = $("#dayInput").val();
    const inputYear = $("#yearInput").val();
    const weekdayChecker = new WeekdayChecker();
    weekdayChecker.leapYear(inputYear);
    const monthArray = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"];
    if (inputMonth === "0") {
      alert("Please select a month");
      event.preventDefault();
    } else if (inputDay === "") {
      alert("Please type in the day");
      event.preventDefault();
    } else if (inputYear === "" || inputYear > 9999 || isNaN(inputYear) === true) {
      alert("Please type in a four digit year");
      event.preventDefault();
    } else if (inputMonth === "12" && inputDay > "29" && weekdayChecker.leapYears === true) {
      alert("Please select no more than 29 days for this month during a leap year.");
      event.preventDefault();
    } else if (inputMonth === "12" && inputDay > "28" && weekdayChecker.leapYears === false) {
      alert("Please select no more than 28 days for this month during a non leap year.");
      event.preventDefault();
    } else if (inputMonth === "2" && inputDay > "30" || inputMonth === 4 && inputDay > "30" || inputMonth === 7 && inputDay > "30" || inputMonth === 9 && inputDay > "30") {
      alert("Please select no more than 30 days for this month.");
    } else {
      weekdayChecker.zellersEquation(inputMonth, inputDay, inputYear);
      const weekdayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const response = weekdayArray[weekdayChecker.dayOfTheWeek];
      $('#outputText').html("The date " + monthArray[inputMonth - 1] + " " + inputDay + ", " + inputYear + " falls on a " + "<strong>" + response + "</strong>" + ".");
      event.preventDefault();
    }
  });
});
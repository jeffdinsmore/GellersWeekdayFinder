// Business Logic
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class WeekdayChecker {
  constructor(months, days, years, twoDigitYear, leapYears) {
    this.days = days;
    this.months = months;
    this.years = years;
    this.twoDigitYear = twoDigitYear;
    this.leapYears = leapYears;
  }

  checkCentury(year) {
    let centuryString = year.substring(0, 2);
    let century = parseInt(centuryString);
    this.century = century;
  }

  checkTwoDigitYear(year) {
    let twoDigitYearString = year.substring(2, 4);
    let twoDigitYear = parseInt(twoDigitYearString);
    this.twoDigitYear = twoDigitYear;
  }

  zellersEquation(month, day, year) {
    // Dictionary<string, string> months = new Dictionary<string, string>() { {"january", "11"}, {"february", "12"}, {"march", "1"}, {"april", "2"}, {"may", "3"}, {"june", "4"}, {"july", "5"}, {"august", "6"}, {"september", "7"}, {"october", "8"}, {"november", "9"}, {"december", "10"} }; 
    this.days = parseInt(day);
    this.month = parseInt(month);
    let twoDigitYearString = year.substring(2, 4);
    this.twoDigitYear = parseInt(twoDigitYearString);

    if (this.month === 11 || this.month === 12) {
      this.twoDigitYear = this.twoDigitYear - 1;
    }

    let centuryString = year.substring(0, 2);
    this.century = parseInt(centuryString);
    let Day = this.days + Math.floor((13 * this.month - 1) / 5) + this.twoDigitYear + Math.floor(this.twoDigitYear / 4) + Math.floor(this.century / 4) - 2 * this.century;

    if (Day < 0 && Day > -7) {
      Day = Day + 7;
    }

    let Day2 = Math.floor(Day % 7);

    if (Day2 < 0 && Day2 > -7) {
      Day2 = Day2 + 7;
    }

    let DayOfTheWeek = parseInt(Day2);
    this.dayOfTheWeek = DayOfTheWeek;
  }

  leapYear(year) {
    let year1 = parseInt(year);

    if (year1 % 4 === 0 && year1 % 100 !== 0 || year1 % 400 === 0) {
      this.leapYears = true;
    } else {
      this.leapYears = false;
    }
  }

}

exports.default = WeekdayChecker;


// export default class WeekdayChecker {
//   constructor(months, days, years, twoDigitYear, leapYears) {
//     this.days = days;
//     this.months = months;
//     this.years = years;
//     this.twoDigitYear = twoDigitYear;
//     this.leapYears = leapYears
//   }

//   checkCentury(year)
//   {
//     let centuryString = year.substring(0,2);
//     let century = parseInt(centuryString);
//     this.century = century;
//   }
  
//   checkTwoDigitYear(year)
//   {
//     let twoDigitYearString = year.substring(2,4);
//     let twoDigitYear = parseInt(twoDigitYearString);
//     this.twoDigitYear = twoDigitYear;
//   }
  
//   zellersEquation(month, day, year)
//   {
//     // Dictionary<string, string> months = new Dictionary<string, string>() { {"january", "11"}, {"february", "12"}, {"march", "1"}, {"april", "2"}, {"may", "3"}, {"june", "4"}, {"july", "5"}, {"august", "6"}, {"september", "7"}, {"october", "8"}, {"november", "9"}, {"december", "10"} }; 
//     this.days = parseInt(day);
//     this.month = parseInt(month);
//     let twoDigitYearString = year.substring(2,4);
//     this.twoDigitYear = parseInt(twoDigitYearString);
//     if (this.month === 11 || this.month === 12) {
//       this.twoDigitYear = this.twoDigitYear - 1;
//     }
//     let centuryString = year.substring(0,2);
//     this.century = parseInt(centuryString);

//     let Day = this.days + Math.floor((13*this.month-1)/5) + this.twoDigitYear + Math.floor(this.twoDigitYear/4) + Math.floor(this.century/4) - (2*this.century);
//     if (Day < 0 && Day > -7)
//     {
//       Day = Day + 7;
//     }
//     let Day2 = Math.floor(Day % 7);
//     if (Day2 < 0 && Day2 > -7)
//     {
//       Day2 = Day2 + 7;
//     }
//     let DayOfTheWeek = parseInt(Day2);
//     this.dayOfTheWeek = DayOfTheWeek;
//   }
  

//   leapYear(year) {
//     let year1 = parseInt(year);
//     if ((year1 % 4 === 0) && (year1 % 100 !== 0) || (year1 % 400 === 0)) {
//       this.leapYears = true;
//     } else {
//       this.leapYears = false;
//     }
//   }
// }
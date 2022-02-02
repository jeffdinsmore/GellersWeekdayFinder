import WeekdayChecker from '../docs/js/weekday.js';

describe('WeekdayChecker', () => {
  const weekdayChecker = new WeekdayChecker();
  
  test('should check if the inputted year is a leap year', () => {
    weekdayChecker.leapYear(2000);
    expect(weekdayChecker.leapYears).toBe(true);
  });

  test('should check if the inputted year is not a leap year', () => {
    weekdayChecker.leapYear(2001);
    expect(weekdayChecker.leapYears).toBe(false);
  });
  
  test('should check if the inputted year returns the century', () => {
    weekdayChecker.checkCentury("2001");
    expect(weekdayChecker.century).toEqual(20);
  });

  test('should check if the inputted year returns the last two digits of the year', () => {
    weekdayChecker.checkTwoDigitYear("2001");
    expect(weekdayChecker.twoDigitYear).toEqual(1);
  });

  test('should check Zellers equation if the inputted day, month, year returns the weekday code 0 - 6', () => {
    weekdayChecker.zellersEquation("9", "9", "2020");
    expect(weekdayChecker.dayOfTheWeek).toEqual(1);
  });

  test('should check if this.twoDigitYear is one less when January or Febuary are selected', () => {
    weekdayChecker.zellersEquation("11", "9", "2020");
    expect(weekdayChecker.twoDigitYear).toEqual(19);
  });
  test('should check Zellers equation if the inputted day, month, year returns weekday code 5 for Friday', () => {
    weekdayChecker.zellersEquation("3", "1", "2020");
    expect(weekdayChecker.dayOfTheWeek).toEqual(5);
  });
  test('should check Zellers equation if the inputted day, month, year returns weekday code 6 for Saturday', () => {
    weekdayChecker.zellersEquation("10", "1", "2001");
    expect(weekdayChecker.dayOfTheWeek).toEqual(6);
  });
});
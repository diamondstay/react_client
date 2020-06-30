/*
* DAY OF WEEK: | d : 1 | do : 1st | dd : Mo | ddd : Mon | dddd : Monday
* DAY OF WEEK (locale): | e : 1
* DAY OF WEEK (ISO): | E : 1
* DAY OF MONTH: | D : 1 | Do : 1st | DD : 01
* DAY OF YEAR: | DDD : 1 | DDDo : 1st | DDDD : 001
* MONTH: | M : 1 | Mo : 1st | MM : 01 | MMM : Jan | MMMM : January
* YEAR: | YY : 20 | YYYY : 2020
* AM/PM: | A : AM PM | a : am pm
* Hour: | H : 1 | HH : 01 | h : 1 | hh : 01
* Minute: | m : 1 | mm : 01
* Second: | s : 1 | ss : 01
* Unix Timestamp: | X : 1360013296
* Unix Millisecond Timestamp: | x : 1360013296123
*/

module.exports = {
  SHORT_DATE_1: 'D/M/YYYY', // 1/1/2020
  SHORT_DATE_2: 'DD/MM/YYYY', // 01/01/2020
  SHORT_DATE_3: 'DD/MM/YY', // 01/01/20
  LONG_DATE_1: 'MMM D, YYYY', // Jan 1, 2020
  FULL_DATE_1: 'ddd, MMM D, YYYY', // Wed, Jan 1, 2020
  FULL_DATE_2: 'dddd, MMMN D, YYYY', // Wednesday, January 1, 2020
  FULL_DATE_3: 'ddd D MMM YYYY', // Wed 1 Jan 2020
  FULL_DATE_4: 'dddd D MMMM YYYY', // Wednesday 1 January 2020
  MONTH_DAY_1: 'MMM D', // Jan 1
  MONTH_DAY_2: 'MMMM D', // January 1
  YEAR_MONTH_1: 'MMM YYYY', // Jan 2020
  YEAR_MONTH_2: 'MMMM YYYY', // January 2020
  SHORT_TIME_1: 'H:mm a', // 1:01 am
  SHORT_TIME_2: 'HH:mm a', // 01:01 am
  SHORT_TIME_3: 'H:mm A', // 1:01 AM
  SHORT_TIME_4: 'HH:mm A', // 01:01 AM
  LONG_TIME_1: 'H:mm:ss a', // 1:01:01 am
  LONG_TIME_2: 'HH:mm:ss a', // 01:01:01 am
  LONG_TIME_3: 'H:mm:ss A', // 1:01:01 AM
  LONG_TIME_4: 'HH:mm:ss A', // 01:01:01 AM
};

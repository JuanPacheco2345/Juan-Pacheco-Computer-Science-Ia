cal_single = ics();
cal_single.addEvent('Fresno Food Bank', 'Come help the Community', 'Fresno, CA', '09/01/2018 1:00 pm', '09/01/2018 3:00 pm');
cal_single.download();

// You can use this for easy debugging
makelogs = function(obj) {
  console.log('Events Array');
  console.log('=================');
  console.log(obj.events());
  console.log('Calendar With Header');
  console.log('=================');
  console.log(obj.calendar());
}
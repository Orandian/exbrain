// const date = new Date();

// var month = date.getMonth();
// var year = date.getFullYear();

// var daysinmonth = new Date(year, month, 0).getDate();

// console.log(daysinmonth);

var month = new Date().getMonth();
var year = new Date().getFullYear();

function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  console.log(days[0]);
}

getDaysInMonth(month, year);

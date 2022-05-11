var setDay = document.getElementById('setDay');
var dayTime = document.getElementsByClassName('daytime');
var nightTime = document.getElementsByClassName('nighttime');

var year = new Date().getFullYear();
var month = new Date().getMonth();
var today = new Date().getDate();

var monthsArray = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];
var daysArray = [
  '日曜日',
  '月曜日',
  '火曜日',
  '水曜日',
  '木曜日',
  '金曜日',
  '土曜日',
];

for (let i = 0; i <= month; i++) {
  document.getElementById('months').innerHTML = monthsArray[i];
}

document.getElementById('today').innerHTML = today;

/**
 * to get the days of the month in array
 * to construct the lists by using the days's array of this month
 * self-invoking function
 */
(function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  document.getElementById('days').innerHTML = days.length + ' ';

  for (let i = 0; i < days.length; i++) {
    const daylist = document.getElementById('daylist');
    var today = days[i].getDay();
    var day;
    var date = days[i].getDate();

    switch (today) {
      case 0:
        day = daysArray[0];
        break;
      case 1:
        day = daysArray[1];
        break;
      case 2:
        day = daysArray[2];
        break;
      case 3:
        day = daysArray[3];
        break;
      case 4:
        day = daysArray[4];
        break;
      case 5:
        day = daysArray[5];
        break;
      case 6:
        day = daysArray[6];
        break;
    }

    // construct the lists by using template string (ES6)
    daylist.innerHTML += `
      <li class="day" onclick="toSetTime(this)" value="${date}">
        <span>${date}</span> 
        <span>${day}</span>
        <div class="daytime" id="dayTime"></div> 
        <div class="nighttime" id="nightTime"></div>  
      </li>
    `;
  }
})(month, year);

// to set the day in the month box
function toSetTime(e) {
  setDay.innerHTML = e.value;
}

// to set schedule to the lists
function toSetSchedule() {
  var day = document.getElementById('day');
  var night = document.getElementById('night');
  var x = +setDay.innerHTML - 1;

  dayTime[x].innerHTML = day.value;
  nightTime[x].innerHTML = night.value;
  day.value = '';
  night.value = '';
}

// to make the hour
setInterval(() => {
  var getHour = new Date().getHours();
  var getMinute = new Date().getMinutes();
  var getSecond = new Date().getSeconds();

  document.getElementById('hour').innerHTML = `
      ${getHour > 12 ? getHour - 12 : getHour} :
      ${getMinute < 10 ? '0' + getMinute : getMinute} :
      ${getSecond < 10 ? '0' + getSecond : getSecond}
      (${getHour > 12 ? 'PM' : 'AM'})
    `;
});

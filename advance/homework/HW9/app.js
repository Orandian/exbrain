var setDay = document.getElementById('setDay');

var month = new Date().getMonth();
var year = new Date().getFullYear();
var today = new Date().getDate();

var dayTime = document.getElementsByClassName('daytime');
var nightTime = document.getElementsByClassName('nighttime');

switch (month) {
  case 0:
    document.getElementById('months').innerHTML = '一月';
    break;
  case 1:
    document.getElementById('months').innerHTML = '二月';
    break;
  case 2:
    document.getElementById('months').innerHTML = '三月';
    break;
  case 3:
    document.getElementById('months').innerHTML = '四月';
    break;
  case 4:
    document.getElementById('months').innerHTML = '五月';
    break;
  case 5:
    document.getElementById('months').innerHTML = '六月';
    break;
  case 6:
    document.getElementById('months').innerHTML = '七月';
    break;
  case 7:
    document.getElementById('months').innerHTML = '八月';
    break;
  case 8:
    document.getElementById('months').innerHTML = '九月';
    break;
  case 9:
    document.getElementById('months').innerHTML = '十月';
    break;
  case 10:
    document.getElementById('months').innerHTML = '十一月';
    break;
  case 11:
    document.getElementById('months').innerHTML = '十二月';
    break;
}

document.getElementById('today').innerHTML = today;

function getDaysInMonth(month, year) {
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
        day = '日曜日';
        break;
      case 1:
        day = '月曜日';
        break;
      case 2:
        day = '火曜日';
        break;
      case 3:
        day = '水曜日';
        break;
      case 4:
        day = '木曜日';
        break;
      case 5:
        day = '金曜日';
        break;
      case 6:
        day = '土曜日';
        break;
    }

    daylist.innerHTML += `
      <li class="day" onclick="toSetTime(this)" value="${date}">
        <span>${date}</span> 
        <span>${day}</span>
        <div class="daytime" id="dayTime"></div> 
        <div class="nighttime" id="nightTime"></div>  
      </li>
    `;
  }
}

getDaysInMonth(month, year);

function toSetTime(e) {
  setDay.innerHTML = e.value;
}

function toSetSchedule() {
  var day = document.getElementById('day');
  var night = document.getElementById('night');

  var x = +setDay.innerHTML - 1;

  dayTime[x].innerHTML = day.value;
  nightTime[x].innerHTML = night.value;

  day.value = '';
  night.value = '';
}

function setHour() {
  var getHour = new Date().getHours();
  var getMinute = new Date().getMinutes();
  var getSecond = new Date().getSeconds();

  var hour = document.getElementById('hour');
  var minute = document.getElementById('minute');
  var second = document.getElementById('second');

  var separate = document.getElementById('separate');

  if (getHour > 12) {
    hour.innerHTML = getHour - 12;
    separate.innerHTML = 'PM';
  } else {
    hour.innerHTML = getHour;
    separate.innerHTML = 'AM';
  }

  if (getMinute < 10) {
    minute.innerHTML = '0' + getMinute;
  } else {
    minute.innerHTML = getMinute;
  }

  if (getSecond < 10) {
    second.innerHTML = '0' + getSecond;
  } else {
    second.innerHTML = getSecond;
  }
}
setHour();

setInterval(() => {
  setHour();
}, 1000);

var todayDate = new Date();
var bornYear = new Date('Jul 15, 1999 00:00:00');
var dif = todayDate.getTime() - bornYear.getTime();
dif = (dif/31556900000)

var ageNum = document.getElementById('age');
ageNum.textContent = Math.floor(dif);
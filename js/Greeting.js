var today = new Date();
var hourNow = today.getHours();
var message;

if(hourNow > 18) {
	message = 'Good evening!';
} else if(hourNow > 12) {
	message = 'Good afternoon!';
} else if(hourNow > 0) {
	message = 'Good morning!';
} else {
	message = 'Welcome!';
}

var elName = document.getElementById('greeting');
elName.textContent = message;

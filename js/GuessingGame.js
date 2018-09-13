var correctAns = Math.floor((Math.random() * 100) + 1);
var response = document.getElementById("guess");
var hintSaying = document.getElementById("hint");

function checkAns() {
	if(response.value == correctAns) {
		hintSaying.textContent = 'Congrats you got it!';
	} else if(response.value < correctAns) {
		hintSaying.textContent = "Maybe try a little bit higher than " + response.value.toString() + "...";
		response.value = '';
	} else{
		hintSaying.textContent = "Maybe try a little bit lower than " + response.value.toString() + "...";
		response.value = '';
	}
}

response.addEventListener("keyup", function(event) {
	if(event.keyCode === 13) {
		checkAns();
	}
});

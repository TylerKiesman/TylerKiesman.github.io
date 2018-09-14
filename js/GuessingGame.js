var correctAns;
resetAns();
var response = document.getElementById("guess");
var originalTxt = "Type in a number and press enter to guess!";
var hintSaying = document.getElementById("hint");
var rbtn = document.getElementById("resetBTN");
rbtn.style.visibility = 'hidden';

//Checks the users guess
function checkAns() {
	if(response.value == correctAns) {
		hintSaying.textContent = 'Congrats you got it!';
		rbtn.style.visibility = 'visible';
	} else if(response.value < correctAns) {
		hintSaying.textContent = "Maybe try a little bit higher than " + response.value.toString() + "...";
		response.value = '';
	} else if(response.value > correctAns){
		hintSaying.textContent = "Maybe try a little bit lower than " + response.value.toString() + "...";
		response.value = '';
	}
	else{
		hintSaying.textContent = "Please enter a valid number...";
		response.value = '';
	}
}

//Resets the number to be guessed
function resetAns() {
	correctAns = Math.floor((Math.random() * 100) + 1);
}

//When the user hits enter the function to check the number is called
response.addEventListener("keyup", function(event) {
	if(event.keyCode === 13) {
		checkAns();
	}
});

//When the user clicks the reset button the game resets
rbtn.addEventListener("click", function() {
	resetAns();
	rbtn.style.visibility = 'hidden';
	response.value = '';
	hintSaying.textContent = originalTxt;
});

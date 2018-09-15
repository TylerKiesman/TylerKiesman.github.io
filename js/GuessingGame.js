var correctAns;
resetAns();
var $response = $("#guess");
var originalTxt = "Type in a number and press enter to guess!";
var $hintSaying = $("#hint");
var $rbtn = $("#resetBTN");
$rbtn.hide();


//Checks the users guess
function checkAns() {
	if($response.val() == correctAns) {
		$hintSaying.text('Congrats you got it!');
		$rbtn.show();
	} else if($response.val() < correctAns) {
		$hintSaying.text( "Maybe try a little bit higher than " + $response.val().toString() + "...");
		$response.val('');
	} else if($response.val() > correctAns){
		$hintSaying.text("Maybe try a little bit lower than " + $response.val().toString() + "...");
		$response.val('');
	}
	else{
		$hintSaying.text("Please enter a valid number...");
		$response.val('');
	}
}

//Resets the number to be guessed
function resetAns() {
	correctAns = Math.floor((Math.random() * 100) + 1);
}

//When the user hits enter the function to check the number is called
$response.keyup(function(event) {
	if(event.keyCode === 13) {
		checkAns();
	}
});

//When the user clicks the reset button the game resets
$rbtn.click(function() {
	resetAns();
	$rbtn.hide();
	$response.val('');
	$hintSaying.text(originalTxt);
});

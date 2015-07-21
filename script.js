

//modal to collect player one name:
var namePlayerOne = function namePlayerOne() {
var playerOneButton = $('#game-start');
var playerOneModal = $('#player-one-modal');
var submitButton = $('#close-modal');

playerOneButton.on('click', function(){
	playerOneModal.toggle();

	});

submitButton.on('click', function(){
	playerOneModal.toggle();
	playerOneButton.toggle();
	grabName = $('#player-one-name').val()
    $('#your-nameone').append(grabName);
    $('#player-one').show();
    return grabName;
    });
	
}

//modal to collect player two name:
var namePlayerTwo = function namePlayerTwo(){
var playerTwoButton = $('#close-modal');
var playerTwoModal = $('#player-two-modal');
var closeButton = $('#close-modal-playertwo');

playerTwoButton.on('click', function(){
	playerTwoModal.toggle();
	
	});

closeButton.on('click', function(){
	playerTwoModal.toggle();
	playerTwoButton.toggle();
	grabSecondName = $('#player-two-name').val();
	$('#your-nametwo').append(grabSecondName);
	$('#player-two').show();
	return grabSecondName;
	});
}

var startGame = function startGame () {
	playerMove();
	namePlayerOne();
	namePlayerTwo();


} 
//Counts odd and even click events; player 1 has odd click events, player 2 even. 
var playerMove = function playerMove (){ 
	var count = 1;
	$('.box').click(function(){
	
		if (count > 10) {
			alert('Game Over');

		}   else if ($(this).children('.ximage').is(':visible') || $(this).children('.oimage').is(':visible')) {
				return true;
		
		}	else if (count % 2 !== 0){
			$(this).children('.ximage').show();
			$('#your-nameone').append('<h2>X</h2>');
			count++;
		}	else if (count % 2 === 0) {
			$(this).children('.oimage').show();
			$('#your-nametwo').append('<h2>O</h2>');
			count++;
				
		}	

	});
}

var winners = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


var xarray = [];
var oarray = [];

//Checks where X images are visible on the game board where player 1 has clicked
//and pushes the location into an array of the x values:
var makeArrayPlayerX = function makeArrayPlayerX () {
	$('.box').on('click', function (){
		if ($(this).children('.ximage').is(':visible')){
		var xindex = $('.box').index($(this));
			xarray.push(xindex);
			console.log(xarray);
			checkWinner();
		}
	});
}
//Checks where O images are visible on the game board 
//and pushes the location into an array of the o values:
var makeArrayPlayerO = function makeArrayPlayerO () {
	$('.box').on('click', function (){
		if ($(this).children('.oimage').is(':visible')){
			var oindex = $('.box').index($(this));
			oarray.push(oindex);
			console.log(oarray);
			checkOWinner();
		} 

	});

}

//Checks if xarray contains elements from any of the winning arrays
var checkWinner = function checkWinner () {
	for (var i = 0; i < winners.length; i++) {
		if (xarray.indexOf(winners[i][0]) !== -1 && xarray.indexOf(winners[i][1]) !== -1 && xarray.indexOf(winners[i][2]) !== -1) {
			console.log("true");
			alert("Congratulations, " + grabName + ", you win!");
			location.reload();
			return true;
		} else { 
			console.log(false);
		
		}

	}
}

//Checks if oarray contains elements from any of the winning array values:
var checkOWinner = function checkOWinner () {
	for (var i = 0; i < winners.length; i++) {
		if (oarray.indexOf(winners[i][0]) !== -1 && oarray.indexOf(winners[i][1]) !== -1 && oarray.indexOf(winners[i][2]) !== -1) {
			console.log("true");
			alert("Congratulations, " + grabSecondName + ", you win!");
			location.reload();
			return true;
		} else {
			console.log("false");
		}
			
	}
}


$("#start").on("click", function(){
	location.reload();

});

startGame();


makeArrayPlayerO();
makeArrayPlayerX();



console.log("linked");


//modals to collect players names:
var namePlayerOne = function namePlayerOne() {
var playerOneButton = $('#modal-button-playerone');
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
    return grabName;
    });
	
}


var namePlayerTwo = function namePlayerTwo(){
var playerTwoButton = $('#modal-button-playertwo');
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
	return grabSecondName;
	});
}

var startGame = function startGame () {

	playerMove();

} 

var playerMove = function playerMove (){ 
	var count = 1;
	$('.box').click(function(){
	
		if (count > 10) {
			alert('Game Over');

		}   else if ($(this).children('.ximage').is(':visible') || $(this).children('.oimage').is(':visible')) {
				return true;
		
		}	else if (count % 2 !== 0){
			$(this).children('.ximage').show();
			count++;

		
		}	else if (count % 2 === 0) {
			$(this).children('.oimage').show();
			count++;
				
		}	

	});
}

var winners = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


var boxArray = [];
var boxDivs = $('.box');
var xarray = [];
var oarray = [];



for(var i = 0; i < boxDivs.length; i++){
	console.log(boxDivs[i]);
	var boardDivs = boxDivs[i];
	var superBoardDivs = $(boardDivs);
	boxArray.push(superBoardDivs);
	console.log(i);
}

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

var checkWinner = function checkWinner (namePlayerOne) {
	for (var i = 0; i < winners.length; i++) {
		var winningArrays = winners[i];
		if (xarray.sort().toString() === winningArrays.toString()){
			console.log("player one wins");
			
			alert("Congratulations, " + grabName + ", you win!");
		} 
	}
}


var checkOWinner = function checkOWinner () {
	for (var i = 0; i < winners.length; i++) {
		var winningArrays = winners[i];
		if (oarray.sort().toString() === winningArrays.toString()) {
			console.log("player two wins");
			alert("Congratulations, " + grabSecondName + ", you win!");
			
		}	
	}
}



$("#start").on("click", function(){
	location.reload();
});

startGame();
namePlayerOne();
namePlayerTwo();

makeArrayPlayerO();
makeArrayPlayerX();



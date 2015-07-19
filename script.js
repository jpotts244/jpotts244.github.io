console.log("linked");






//modals to collect players names:
var namePlayerOne = function namePlayerOne () {
var playerOneButton = $('#modal-button-playerone');
var playerOneModal = $('#player-one-modal');
var submitButton = $('#close-modal');

playerOneButton.on('click', function(){
	playerOneModal.toggle();

	});

submitButton.on('click', function(){
	playerOneModal.toggle();
	playerOneButton.toggle();
	var grabName = $('#player-one-name').val()
	console.log(grabName);
    $('#your-nameone').append(grabName);
    });

}


var namePlayerTwo = function namePlayerTwo() {
var playerTwoButton = $('#modal-button-playertwo');
var playerTwoModal = $('#player-two-modal');
var closeButton = $('#close-modal-playertwo');

playerTwoButton.on('click', function(){
	playerTwoModal.toggle();
	
	});

closeButton.on('click', function(){
	playerTwoModal.toggle();
	playerTwoButton.toggle();
	var grabSecondName = $('#player-two-name').val();
	$('#your-nametwo').append(grabSecondName);
	
	});
}

var startGame = function startGame () {
	namePlayerOne();
	namePlayerTwo();
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


for(var i = 0; i < boxDivs.length; i++){
	console.log(boxDivs[i]);
	var boardDivs = boxDivs[i];
	var superBoardDivs = $(boardDivs);
	boxArray.push(superBoardDivs);
	console.log(i);
}

// var restartGame = function restartGame () {
// 	$('#start').on('click', function(){
// 		startGame();
// 	});
	

// } 

$("#start").on("click", function(){
	location.reload();
});

startGame();



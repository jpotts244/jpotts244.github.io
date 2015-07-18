console.log("linked");
//modals to collect players names:
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
	startGame();
	playerMove();
});

var startGame = function startGame () {
	alert("Let's play!");

}

var playerMove = function playerMove (){ 
	var count = 0;
	$('.box').click(function(){
		count++;
		if (count > 9) {
		alert('Game Over');
	}   else if (count % 2 === 0) {
		$(this).children('.oimage').show();
	}	else if (count % 2 !== 0){
		$(this).children('.ximage').show();	
	}	

});
}


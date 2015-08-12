var rowSize = 100;
var blockSize = $('#gridContainer').width()/rowSize;

$(document).ready(function() {
	createGrid(rowSize);

	black();


});

function createGrid(rowSize) {
	for(var i = 1; i <= rowSize; i++){
		for(var j = 1; j <= rowSize; j++){
			$('#gridContainer').append('<div class="gridBlock"></div>');
		}
		$('#gridContainer').append('<div class="row"></div>');
	}
	$('.gridBlock').css('width',blockSize);
	$('.gridBlock').css('height',blockSize);
}

function black() {
	$('.gridBlock').mouseenter(function() {
        $(this).css('background-color', 'black');
    });
}
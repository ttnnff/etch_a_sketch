var gridSize = 64;

$(document).ready(function() {
	createGrid(gridSize);

});


function createGrid(gridSize) {
	$('p').after('<div id="gridContainer"></div>'); 			//create container for blocks
	var blockSize = $('#gridContainer').width()/gridSize - 2; 	//calculate size of blocks based on grid resolution

	for(var i = 1; i <= gridSize; i++){ 						//create rows and blocks
		for(var j = 1; j <= gridSize; j++){
			$('#gridContainer').append('<div class="gridBlock"></div>');
		}
		$('#gridContainer').append('<div class="row"></div>');
	}

	$('.gridBlock').css('width',blockSize);						//adjust size of blocks to fit grid resolution
	$('.gridBlock').css('height',blockSize);

	blockColor();													
}

function clearGrid() {											//remove grid and create a new one
	alert("y");
	$('#gridContainer').remove();
	createGrid(gridSize);
}

function blockColor() {
	$('.gridBlock').mouseenter(function() {
		$(this).css('background-color', 'black');
	});
}




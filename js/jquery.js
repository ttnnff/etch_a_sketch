var rowSize = 16;

$(document).ready(function() {
	$('p').css('color', 'red');

	createGrid(rowSize);

});

function createGrid(rowSize) {
	for(var i = 0; i < rowSize; i++){
		$('#gridContainer').append('<div class="row"></div>');
		alert("i " + i);
	}
	for (var j = 0; j < rowSize; j++) {
			$(".row").append('<div class="gridBlock"></div>');
			alert("j " + j);
	}	
}


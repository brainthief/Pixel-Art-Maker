// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//$('#knopke').click(makeGrid());
//$('#input_height').change(makeGrid());
//$('#input_width').change(makeGrid());

$('#sizePicker').submit(function () {
 makeGrid();
 return false;
});

function makeGrid() {
	//console.log("labas");
	var row = $("#input_height").val();
	var col = $("#input_width").val();
	var createRow = '';
	for (var j = 0; j < row; j++) {
		createRow+="<tr>";
		var createCol = '';
		for (var i = 0; i < col; i++) {
			createCol+="<td></td>";
		}
		
		createRow+=createCol;
		createRow+="</tr>";
	}
	
	//console.log(createRow);
	$( "#pixel_canvas" ).html( createRow );
// Your code goes here!

}

$("#pixel_canvas").on("click", "td", function() {
	 var color = $("#colorPicker").val();
     $( this ).css("background-color",color);
});
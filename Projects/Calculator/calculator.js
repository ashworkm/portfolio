//initialize constants and global variables
MAXLENGTH = 23;
operator = 0;
equation = 0;



function appendEntry () {
//	var equation = "";
	var keys = document.querySelectorAll("button");
	var myWindow = document.getElementById("window");
	myWindow.innerHTML = equation;

		for (i = 0; i < keys.length; i++) (function(i) {
			keys[i].addEventListener('click', function() {
			equation += keys[i].value;
			myWindow.innerHTML = equation;
			console.log(equation);
			return equation;
		}
	)}) (i);


} 

// call functions

appendEntry();
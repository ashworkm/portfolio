function calculate () {
	var equation = "";
	var keys = document.querySelectorAll("button");
	var myWindow = document.getElementById("window");

		for (i = 0; i < keys.length; i++) (function(i) {
			keys[i].addEventListener('click', function() {
			equation += keys[i].value;
			myWindow.innerHTML = equation;
			console.log(equation);
			return equation;
		}
	)}) (i);


} 

// need to place length limit on window

calculate();
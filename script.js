let mainBox = document.getElementById("main-div");
let output = document.getElementById("output-box");

setInterval(function () {
	let deg = Math.floor(Math.random() * 360);
	let col1 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
	let col2 = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

	mainBox.style.background = "linear-gradient( " + deg + "deg, " + col1 + "," + col2 + ")";
	output.style.backgroundColor = col1;
	output.style.color = "azure";
}, 2000);

let cCode = [];
let count = 0;
let guessCount = 0;
let c1 = document.getElementById("code1");
let c2 = document.getElementById("code2");
let c3 = document.getElementById("code3");

for (let x = 0; x < 3; x++) {
	cCode.push(Math.floor(Math.random() * 9));
}

//output.innerHTML += cCode + "<br />";

function crack() {
	count = 0;
	let guess = [c1.value, c2.value, c3.value];

	for (let x = 0; x < cCode.length; x++) {
		output.innerHTML += checkNum(guess[x], cCode[x]);
	}

	if (count == 3) {
		output.innerHTML += " You guessed it <br />";
		output.innerHTML += " You guessed it after " + guessCount / 3 + " trials";
	} else {
		output.innerHTML += "<br />"
	}
}

function checkNum(a, b) {
	guessCount++;
	if (a > b) {
		return "L";
	} else if (a < b) {
		return "H";
	} else {
		count++;
		return a;
	}
}
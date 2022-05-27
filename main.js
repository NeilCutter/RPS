const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");
const display = document.getElementById("display");
const reset = document.getElementById("reset");

let comp_user = ["rock", "paper", "scissors"];
let cCount = 0;
let pCount = 0;

r.onclick = function () {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == comp_user.indexOf("paper")) {
		display.textContent = "You Lose";
		cCount += 1;
		document.getElementById("comp").textContent = "Computer: " + cCount;
	} else if (randomNumber == comp_user.indexOf("rock")) {
		display.textContent = "Draw";
	} else {
		display.textContent = "You Win";
		pCount += 1;
		document.getElementById("player").textContent = "Player: " + pCount;
	}
};
p.onclick = function () {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == comp_user.indexOf("scissors")) {
		display.textContent = "You Lose";
		cCount += 1;
		document.getElementById("comp").textContent = "Computer: " + cCount;
	} else if (randomNumber == comp_user.indexOf("paper")) {
		display.textContent = "Draw";
	} else {
		display.textContent = "You Win";
		pCount += 1;
		document.getElementById("player").textContent = "Player: " + pCount;
	}
};
s.onclick = function () {
	let randomNumber = Math.floor(Math.random() * 3);
	if (randomNumber == comp_user.indexOf("rock")) {
		display.textContent = "You Lose";
		cCount += 1;
		document.getElementById("comp").textContent = "Computer: " + cCount;
	} else if (randomNumber == comp_user.indexOf("scissors")) {
		display.textContent = "Draw";
	} else {
		display.textContent = "You Win";
		pCount += 1;
		document.getElementById("player").textContent = "Player: " + pCount;
	}
};

reset.onclick = function () {
	cCount = 0;
	pCount = 0;
	document.getElementById("comp").textContent = `Computer: ${cCount}`;
	document.getElementById("player").textContent = `Player: ${pCount}`;
	document.getElementById("display").textContent = " ";
};

// import anime from "animejs";
// const anime = require("animejs");

const img = document.querySelectorAll(".img");
const arr = Array.from(img);
const l = arr.length;

console.log(l);
let x = 0;
const shwoIMG = y => {
	if (y === 0) {
		return;
	}
	setTimeout(() => {
		arr[x++].hidden = false;
		shwoIMG(y - 1);
	}, 500);
};
shwoIMG(l);
// img.addEventListener("click", e => {
// 	console.log(e.target);
// });
// console.log(arr);

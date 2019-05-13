// import anime from "animejs";
// const anime = require("animejs");

const img = document.querySelectorAll(".img");
const arr = Array.from(img);
const l = arr.length;
const wr = document.getElementById("fullWrapper");
const imgDis = document.getElementById("fullView");

console.log(l);
let x = 0;

const showIMG = y => {
  if (y === 0) {
    return;
  }
  setTimeout(() => {
    arr[x++].hidden = false;
    showIMG(y - 1);
    if (x === l) {
      fullV();
    }
  }, 100);
};
showIMG(l);
const fullV = async () => {
  console.log("done");
  let el = new Promise((res, rej) => {
    arr.forEach((val, i) => {
      val.addEventListener("click", e => {
        wr.style.display = "flex";
        e.target.classList.remove("img");
        e.target.classList.add("added");
        imgDis.appendChild(e.target);
        console.log("click");
        res(e.target);
      });
    });
  });
  el.then(el => {
    closeIMG(el);
  });
};

const closeIMG = e => {
  console.log(e);
  const p = document.createElement("p");
  const x = document.createTextNode("x");
  p.appendChild(x);
  p.style = `
	display: absolute;
	top: 0;
	font-size:50px;
	cursor: pointer;
	`;
  wr.appendChild(p);
  p.id = "close";
  const pClose = document.getElementById("close");
  pClose.addEventListener("click", () => {
    wr.style.display = "none";
  });
};

// el.then(el => {
// 	el.addEventListener(
// 		("click",
// 		() => {
// 			wr.style.display = "none";
// 			e.target.classList.add("img");
// 			e.target.classList.remove("added");
// 		})
// 	);
// });

// const loopIMG = arr => {

// };

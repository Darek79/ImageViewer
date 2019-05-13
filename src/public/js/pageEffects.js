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
        const cloned = e.target.cloneNode(false);
        cloned.classList.remove("img");
        cloned.classList.add("added");
        imgDis.appendChild(cloned);
        console.log(imgDis);
        res(cloned);
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
  wr.appendChild(p);
  console.log(window.pageXOffset);
  console.log(window.pageYOffset);
  p.style = `
  position: absolute;
  font-size: 30px;
  width: 50px;
  height: 50px;
  top: 10px;
  right: 10px;
  cursor: pointer;
  `;
  p.id = "close";
  const pClose = document.getElementById("close");
  pClose.addEventListener("click", () => {
    imgDis.innerHTML = "";
    wr.style.display = "";
    // document.body.style.overflow = "initial";
  });
};

const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "public");

exports.dirAmount = () => {
  fs.readdir(p, (err, folders) => {
    folders.forEach((val, i) => {
      if (val.includes("set")) {
        console.log(val);
        let gPath = p + `/${val}`;
        fs.readdir(gPath, (err, files) => {
          console.log(files.length);
        });
      }
    });
  });
};

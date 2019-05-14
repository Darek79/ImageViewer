const multer = require("multer");
const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "public", "testUpload");
console.log(p);
const ch = fs.existsSync(p);
console.log(ch);

const upload = multer({dest : p});

exports.fileSaver = upload.single("file"),(req, res) => {
  console.log(ch);
  res.redirect("/");
};

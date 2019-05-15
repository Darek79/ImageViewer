const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const router = express.Router();
const SaveData = require("../controllers/getData");
const pics = require("../controllers/showPics");
// const uploadIMG = require("../controllers/uploadIMG");
const dirLength = require("../controllers/countCreateFolder");

dirLength.dirAmount();

const multer = require("multer");

const p = path.join(__dirname, "..", "public", "testUpload");
console.log(p);

// SET STORAGE
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, p);
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  }
});

var upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.render("main", { page: "mainPage" });
  // res.redirect("/output");
});

router.post("/getData", async (req, res) => {
  const file = new SaveData(req.body.title);
  file.saveFile();
  res.redirect("/");
});

router.post("/upload", upload.single("picture"), (req, res) => {
  const img = fs.readFileSync(req.file.path);
  const encodeIMG = img.toString("base64");

  const finalIMG = {
    contentType: req.file.mimetype,
    image: Buffer.from(encodeIMG, "base64")
  };
  console.log(finalIMG);
  // fs.writeFile(p, finalIMG, err => {
  // 	if (err) throw err;
  // 	console.log("img saved");
  // });
  res.redirect("/");
});

router.get("/output", async (req, res) => {
  const title = await SaveData.fetchData();
  const setNr = await app.get("picsNr");
  const img = await pics.loopPics(setNr);

  res.render("output", {
    page: "output",
    title,
    nr: setNr,
    img: img
  });
});

router.get("/getParams/:id", (req, res) => {
  app.set("picsNr", req.params.id);
  res.redirect("/output");
});

router.use((req, res) => {
  res.status(404).send(`<h1>page not found</h1>`);
});

module.exports = router;

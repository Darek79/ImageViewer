const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const router = express.Router();
const SaveData = require("../controllers/getData");
const pics = require("../controllers/showPics");

router.get("/", (req, res) => {
  // res.render("main", { page: "mainPage" });
  res.redirect("/output");
});

// router.post("/getData", async (req, res) => {
//   const file = new SaveData(req.body.title);
//   file.saveFile();
//   res.redirect("/");
// });

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

// router.get("/clkIMG/:files", (req, res) => {
//   app.set("clkPic", req.params.files);
//   console.log("x");
//   res.redirect("/output");
// });

module.exports = router;

const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const p = path.join(__dirname, "..", "public", "set");
console.log(p);
// if (fs.existsSync(p)) {
// 	console.log(true);
// }

exports.loopPics = async int => {
	return new Promise((res, rej) => {
		fs.readdir(p + int, (err, data) => {
			res(data);
		});
	});
};

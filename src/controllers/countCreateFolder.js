const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "public");

module.exports = class CheckFolders {
	constructor() {
		this.p = p;
		this.res = {};
	}

	async getEmptyFolders() {
		const folders = await this.checkFilesLength();
		console.log(folders);
		return folders;
	}

	async checkFilesLength() {
		const getDir = await this.checkGalleryFolder();
		return new Promise((res, rej) => {
			let arrOfPath = [];
			let obj = {};
			getDir.forEach((val, i) => {
				fs.readdir(val, async (err, data) => {
					if (data.length < 12) {
						obj = {
							path: val,
							img: data.length
						};
						await arrOfPath.push(obj);
						res(arrOfPath);
					}
				});
			});
		});
	}

	checkGalleryFolder() {
		const pathArr = [];
		return new Promise((res, rej) => {
			fs.readdir(this.p, (err, folders) => {
				folders.forEach((val, i) => {
					if (val.includes("set")) {
						let gPath = this.p + `/${val}`;
						pathArr.push(gPath);
						res(pathArr);
					}
				});
			});
		});
	}
};

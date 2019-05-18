const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "public");

module.exports = class CheckFolders {
	constructor() {
		this.p = p;
		this.farr = [];
	}

	async getUploadFolder() {
		const arrOfFolders = await this.checkFilesLength();

		const sorted = await arrOfFolders.sort((a, b) => {
			return a[1] - b[1];
		});
		await sorted.reverse();

		return new Promise((res, rej) => {
			sorted.forEach((val, i) => {
				if (val[1] < 12) {
					res(val[0]);
				}
			});
		});
	}

	async checkFilesLength() {
		const getDir = await this.checkGalleryFolder();
		let arr = [];

		return new Promise((res, rej) => {
			getDir.forEach(val => {
				fs.readdir(val, (err, data) => {
					let x = Promise.resolve([val, data.length]);
					x.then(data => {
						arr.push(data);
						if (arr.length === getDir.length) {
							res(arr);
						}
					});
				});
			});
		});
	}

	async checkGalleryFolder() {
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

// async checkFilesLength() {
// 	const getDir = await this.checkGalleryFolder();
// 	let arr = [];

// 	return new Promise((res, rej) => {
// 		getDir.forEach(val => {
// 			fs.readdir(val, (err, data) => {

// 				if (data.length < 12) {
// 					this.obj = {
// 						path: val,
// 						img: data.length
// 					};
// 				}
// 				let x = Promise.resolve(this.obj);
// 				x.then(data => {
// 					if (Object.entries(data).length > 0) {
// 						arr.push(data);
// 					} else {
// 						arr.push({});
// 					}
// 					if (arr.length === getDir.length) {
// 						res(arr);
// 					}
// 				});
// 			});
// 		});
// 	});
// }

const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "public");

module.exports = class CheckFolders {
	constructor() {
		this.p = p;
		this.arr = [];
	}

	// async check() {
	// 	const getDir = await this.checkGalleryFolder();
	// 	let numArr = [1, 2, 3, 4, 5];
	// 	let nums = [];

	// 	let promiseList = new Promise(function(resolve, reject) {
	// 		setTimeout(() => {
	// 			getDir.forEach(val => {
	// 				nums.push(val);
	// 			});
	// 			resolve(nums);
	// 		}, 1000);
	// 	});

		Promise.all([promiseList]).then(arrList => {
			arrList.forEach(array => {
				console.log("Array return from promiseList object ", array);
			});
		});
	}

	async pResolve(pr) {
		return new Promise((res, rej) => {
			res(pr);
		});
	}

	async checkFilesLength() {
		const getDir = await this.checkGalleryFolder();
		console.log(getDir);

		let folderList = new Promise((res, rej) => {
			getDir.forEach(val => {
				let obj = {};
				fs.readdir(val, (err, data) => {
					obj.path = val;
					obj.img = data.length;
					// console.log(obj);
					res(obj);
				});
			});
		});
		(async () => {
			console.log(await folderList);
		})();
		// console.log(folderList);
		// Promise.all([folderList]).then(arr => {
		// 	console.log(arr);
		// });
	}

	// async function printFiles () {
	// 	const files = await getFilePaths();

		// await Promise.all(files.map(async (file) => {
		//   const contents = await fs.readFile(file, 'utf8')
		//   console.log(contents)
		// }));
	  // }

	// async getEmptyFolders() {
	// 	const folders = await this.checkGalleryFolder();
	// 	// console.log(folders);
	// 	return folders;
	// }

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

// let folderArr = [];
// let obj = {};

//   getDir.forEach((val, i) => {
//     const arrList = new Promise((res, rej) => {
//     fs.readdir(val, async (err, data) => {
//       if (data.length < 12) {
//        res([val,data.length])
//         };
//       }
//     });
//   });
//   Promise.all([arrList]).then(data => {
//     console.log(data);
// });

// });

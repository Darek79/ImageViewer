// const path = require("path");
// const fs = require("fs");

// https://flaviocopes.com/node-file-paths/
// https://stackoverflow.com/questions/16316330/how-to-write-file-if-parent-folder-doesnt-exist

// const x = path.join(path.resolve("data","file.json"));
// console.log(fs.existsSync(x));

// const createText=async()=>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let nr = Math.floor(Math.random()*5);
//             res(nr);
//         },2000)
//     })
// }

// const readTXT=async()=>{
//     let item =[];
//     const txt = await createText();
//     let obj = {nr:txt}
//     item.push(obj);
//     return new Promise((res,rej)=>{
//         res(JSON.stringify(item))
//     })
// }

// const chkFile=async()=>{

//     return new Promise((res,rej)=>{
//         fs.readFile(x,(err,data)=>{
//             if(!fs.existsSync(x)){
//                  res([]);
//             } else if(fs.existsSync(x)){
//                 return res(data);
//             } else {
//                 return rej(err);
//             }
//         })
//     })
// }

// const writeFile=async()=>{
//     // const txt = await readTXT();
//     const arr = await chkFile();
//     await arr.push("text");
//     return await arr;

// console.log(arr);
// return await arr;
// const strg = await Buffer.concat(arr).toString();
// console.log(strg);
// fs.writeFile(x,strg,(err)=>{
//     if (err) throw err;
//     console.log("file saved");
// })
// }
// writeFile();

// (async()=>{
//     console.log(`msg is: ${await writeFile()}`);
// })();

// https://jakearchibald.com/2017/await-vs-return-vs-return-await/

//create a server object:

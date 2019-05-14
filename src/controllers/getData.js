const path = require("path");
const fs = require("fs");

const p = path.join(__dirname, "..", "data", "data.json");
console.log(p);

const checkP = fs.existsSync(p);

// console.log(checkP);

module.exports = class SaveData {
  constructor(title) {
    this.title = title;
  }
  static async fetchData() {
    return new Promise((res, rej) => {
      if (fs.existsSync(p)) {
        fs.readFile(p, "utf-8", async (err, data) => {
          res(JSON.parse(data));
        });
      } else {
        res([]);
      }
    });
  }
  async saveFile() {
    const data = await SaveData.fetchData();
    this.id = data.length + 1;
    await this.id.toString();
    await data.push({ title: this.title, id: this.id });
    return new Promise((res, rej) => {
      fs.writeFile(p, JSON.stringify(data), err => {
        if (err) throw err;
        res(console.log("saved"));
      });
    });
  }
};

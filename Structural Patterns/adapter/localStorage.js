const {
  writeFile,
  existsSync,
  readFileSync,
  unlink,
  writeFileSync,
} = require("fs");

const localStorageFile = "localStorage.json";
class LocalStorage {
  constructor() {
    if (existsSync(localStorageFile)) {
      console.log("Loading items from the localStorage.json");
      const text = readFileSync(localStorageFile);
      this.items = JSON.parse(text);
    } else this.items = {};
  }
  getLength() {
    return Object.keys(this.items).length;
  }
  getItem(key) {
    return this.items[key];
  }
  setItem(key, value) {
    this.items[key] = value;
    writeFile(localStorageFile, JSON.stringify(this.items), (error) => {
      console.log(error);
    });
  }
  clear() {
    this.items = {};
    unlink(localStorageFile, () => {
      console.log("Local Storage file removed.");
    });
  }
}

module.exports = new LocalStorage();

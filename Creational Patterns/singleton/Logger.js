class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }
  getInstance() {
    return Singleton.instance;
  }
}

//singletons can implemented in node.js
//by module exporting a instance of the class.
//the instance will be cached into memory and
//node will provide the same instance to other files
//importing the module.
//i.e module.exports= new Logger()

module.exports = Singleton;

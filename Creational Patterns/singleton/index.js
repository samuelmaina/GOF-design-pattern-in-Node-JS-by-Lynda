//Intent: Ensure that a class has only one instance
//and  provide a global point of access to it.
var Logger = require("./Logger");
var Shopper = require("./Shopper");
var Store = require("./Store");

var logger = new Logger().getInstance();

logger.log("starting app...");

var alex = new Shopper("alex", 500);
var ski_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750,
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5,
  },
]);

logger.log("finished config...");

console.log(`${logger.count} logs total`);

//the logs stats that are being displayed
//are  the index.js. In order to make sure that
//all the log stats for all the loggers used, we need
//a singleton that will store all the logging stats for the application

//to create the singleton , just ensure that the
//logger class exports only a single instance of
// of the logger Class

logger.logs.map((log) => console.log(`   ${log.message}`));

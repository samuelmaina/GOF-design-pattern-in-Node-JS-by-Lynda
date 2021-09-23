//Intent: Specify the kinds of objects to create using
//prototypical instance, and creat new objects by copying this
//prototype

//useful when setting complex objects
//that have the identical  attributes.

//in this case, the prototype contain an object
//that contains the common items that a scout
//must have. if more items are to be added,they are
//just added to the prototype.

const scoutProto = require("./scoutPrototype");
const samuel = scoutProto.clone();
samuel._name = "Samuel Maina";
samuel.addItemToList("slingshot");

var eve = scoutProto.clone();
eve._name = "Eve Anyango";
eve.addItemToList("reading light");

console.log(`${samuel.name}: ${samuel.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);

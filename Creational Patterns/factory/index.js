//Intent: Define an interface for creating an object,
//but let subclasses decide which class to intiate.
//Factory Method lets a class defer instantiation to
//subclasses.

const userFactory = require("./userFactory");

var alex = userFactory("Alex Banks", 100);
var eve = userFactory("Eve Porcello", 100, "employee", "This and That");

console.log(alex.toString());
console.log(eve.toString());

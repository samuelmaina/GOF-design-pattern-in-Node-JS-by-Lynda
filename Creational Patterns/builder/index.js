//Intent: Separate the construction of a complex object
//from its representation so that the same construction
//process can create different representations.

//It is used when one need to create complex
//objects
//it serves against the anti-design pattern called the
//telescoping constructor(a constructor having very many arguments that it
//becomes very hard to understand the code in the later days.)
const PersonBuilder = require("./PersonBuilder");

// Employees

const sue = new PersonBuilder("Sue").makeEmployee().makeManager(60).build();

const bill = new PersonBuilder("Bill").makePartTime().build();
const phil = new PersonBuilder("Phil").makeEmployee();

// Shoppers
const charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["jeans", "sunglasses"])
  .build();
const tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();

console.log(sue.toString(), charles.toString());

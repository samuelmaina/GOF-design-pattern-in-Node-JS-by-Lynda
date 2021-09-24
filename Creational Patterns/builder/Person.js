class Person {
  //an example of telescoping constructor. It has very many arguements that
  //it becomes very hard for one to know what the arguements mean
  //at instantiation.
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;

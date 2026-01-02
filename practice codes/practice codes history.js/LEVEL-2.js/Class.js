//CLASS

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    console.log("Animal");
  }
  speak() {
    console.log("hi there" + this.speaks);
  }
}
console.log(Animal.myType());
//output:Animal,boz static methods can direct call vth the class name
console.log(Animal.speak());
//output:Error,bocz normal methods cannot directly call by class,if we want to call it ?then it should be instantiate with object
let dog = new Animal("dog", 4, "bhow bhow");
//create object
let cat = new Animal("cat", 4, "meow meow");
cat.speak();

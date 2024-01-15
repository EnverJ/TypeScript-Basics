// Arrow function: => fat arrow  or lambda function
// Anonymous function: without a name

let info2 = () => {
  console.log("Hello ts");
};

() => {
  console.log("hello info");
};

//
let print5 = () => console.log("hello");

info2();
print5();

// let add3 = (x: number, y: number): number => {
//   return x + y;
// };
// let sum0 = add3(10, 20);
// console.log(sum0);

// let sum4 = (x: number, y: number) => x + y;
// console.log(sum4(4, 5));

class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  display = () => console.log(this.firstName + " " + this.lastName);
}

let personInfo = new Person("tom", "Green");
personInfo.display();

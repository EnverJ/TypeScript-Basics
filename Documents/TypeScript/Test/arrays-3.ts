let names: string[] = ["perter", "john", "todd"];
console.log(names[0]);

// using generics
let empName: Array<string> = ["perter", "john", "todd"];
let isEmptyBindingElement: Array<number> = [1, 2, 3];
let empIno: Array<any> = [true, "ez", 2345];

// multi type array
let values: (string | number)[] = ["tom", 32, "never", 100];
let val: Array<string | number> = ["java", 4];

// first array declaration and init
let users: Array<string>;
users = ["java", "js", "lombok"];

//
let employee: Array<string> = ["tom", "todd", "tony"];
// iterate the array: use for loop
for (let i = 0; i < employee.length; i++) {
  console.log(employee[i]);
}

// for in loop
for (let e in employee) {
  console.log(e + ":" + employee[e]);
}

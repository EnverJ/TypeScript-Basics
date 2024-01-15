// Tuple : fixed size, order matters
// tuple vs array
// array: dynamic: runtime more values can be added

let person: [string, number] = ["enver", 18];
let user: [string, number, boolean] = ["enver", 18, true];
console.log(person[0]);
console.log(person[1]);

let data: [string, number][] = [
  ["sky", 100],
  ["sea", 90],
];
console.log(data[0]);
console.log(data[0][0]);

let customer: [string, number] = ["enver", 18];
customer.push("ravi", 200);
console.log(customer);

// Typescript is a statically typed language
// Type Interface
// Type annotations

let fName: string; // Type Annotations
fName = "enver";

let fName2: string = "Sea";

let num: number;
num = 4;

let n: number = 40;

let test = "typo"; // type=string --CT --> Type interface
let n1 = 70;

let billAmount = 1000; // type = number --CT --> type Interface

let isActive: boolean = true;

// null and undefined
let city: null = null;
let country: undefined = undefined;

console.log("-----any--------");
// any type: any type of data can be declared in this variable
let value: any = 80;
value = "never";
value = true;
console.log(value);

// void: function dose not return any value:
function printHello(): void {
  // return type: void --CT (compile time)
  console.log("Hello");
}

function Hello(a: number, b: number): number {
  return a + b;
}
const a = Hello(9, 19);
console.log(a);

function getNumber(): number {
  // return type is number
  return 123;
}

function getAnyValue(): any {
  return "testing";
}

function addition(a, b) {
  return a + b; // CT -- type interface will be applied as number
}
addition(23, 32);

// name : add
// params: a(number), b(number)
// return type: number
function add1(a: number, b: number): any {
  return a + b;
}
console.log(add1(4, 14));

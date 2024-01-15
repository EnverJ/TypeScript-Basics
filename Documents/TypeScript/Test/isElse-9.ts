let flag2: boolean = true;

if (flag2) {
  console.log("pass");
} else {
  console.log("false");
}

let x: number = 10,
  y: number = 20;
if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("y is greater than x");
}

// < > <= >= === !=
// if- else if

let a: number = 100;
let b: number = 200;
let c: number = 300;
if (a > b && a > c) {
  console.log("a is the grates number");
} else if (b > c) {
  console.log("b is grates");
} else {
  console.log("c is greatest");
}

// Ternary Operator
let i: number = 100;
let j: number = 20;
i > j ? console.log("i is greater than j") : console.log("j is greater than i");

let browser: string = "Safari";
browser === "chrome"
  ? console.log("launch chrome")
  : browser === "Firefox"
  ? console.log("launch Firefox")
  : browser === "safari"
  ? console.log("launch safari")
  : console.log("please enter right browser");

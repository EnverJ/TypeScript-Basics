// function is TS
// void
// return
//take parameters

// named function

// zero parameters function
function getInfo() {
  console.log("hello info");
}
getInfo();

function add(a: number, b: number) {
  // 2 parameters
  console.log(a + b);
}
add(10, 20); // call by values --arguments

function calNumbers(a: number, b: number, c: number): number {
  let total: number = a + b - c;
  return total;
}
let result: number = calNumbers(30, 40, 50);
console.log(result);

function isUserActive(useName: string): boolean {
  if (useName === "automation") {
    return true;
  } else if (useName === "DEVELOPER") {
    return false;
  } else {
    console.log(useName + " not found");
    return false;
  }
}

if (isUserActive("automnnation")) {
  console.log("log into automation");
}
// 2. Anonymous function: without a name function -- store in a variable
let test2 = function () {
  console.log("Hello TS");
};
test2();

let sum = function (x: number, y: number): number {
  return x + y;
};
let res = sum(5, 6);
console.log(res);

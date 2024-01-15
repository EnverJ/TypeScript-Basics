// Typescript is a statically typed language
// Type Interface
// Type annotations
var fName; // Type Annotations
fName = "enver";
var num;
num = 4;
var n = 40;
var test = "typo"; // type=string --CT --> Type interface
var n1 = 70;
var billAmount = 1000; // type = number --CT --> type Interface
var isActive = true;
// null and undefined
var city = null;
var country = undefined;
// any type: any type of data can be declared in this variable
var value = 80;
value = "never";
value = true;
// void: function dose not return any value:
function printHello() {
    // return type: void --CT (compile time)
    console.log("Hello");
}
function getNumber() {
    // return type is number
    return 123;
}
function getAnyValue() {
    return "testing";
}
function addition(a, b) {
    return a + b; // CT -- type interface will be applied as number
}
addition(23, 32);
// name : add
// params: a(number), b(number)
// return type: number
function add1(a, b) {
    return a + b;
}
console.log(add1(4, 4));

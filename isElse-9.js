var flag2 = true;
if (flag2) {
    console.log("pass");
}
else {
    console.log("false");
}
var x = 10, y = 20;
if (x > y) {
    console.log("x is greater than y");
}
else {
    console.log("y is greater than x");
}
// < > <= >= === !=
// if- else if
var a = 100;
var b = 200;
var c = 300;
if (a > b && a > c) {
    console.log("a is the grates number");
}
else if (b > c) {
    console.log("b is grates");
}
else {
    console.log("c is greatest");
}
// Ternary Operator
var i = 100;
var j = 20;
i > j ? console.log("i is greater than j") : console.log("j is greater than i");
var browser = "Safari";
browser === "chrome"
    ? console.log("launch chrome")
    : browser === "Firefox"
        ? console.log("launch Firefox")
        : browser === "safari"
            ? console.log("launch safari")
            : console.log("please enter right browser");

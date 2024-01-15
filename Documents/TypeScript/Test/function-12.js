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
function add(a, b) {
    // 2 parameters
    console.log(a + b);
}
add(10, 20); // call by values --arguments
function calNumbers(a, b, c) {
    var total = a + b - c;
    return total;
}
var result = calNumbers(30, 40, 50);
console.log(result);
function isUserActive(useName) {
    if (useName === "automation") {
        return true;
    }
    else if (useName === "DEVELOPER") {
        return false;
    }
    else {
        console.log(useName + " not found");
        return false;
    }
}
if (isUserActive("automnnation")) {
    console.log("log into automation");
}
// 2. Anonymous function: without a name function -- store in a variable
var test2 = function () {
    console.log("Hello TS");
};
test2();
var sum = function (x, y) {
    return x + y;
};
var res = sum(5, 6);
console.log(res);

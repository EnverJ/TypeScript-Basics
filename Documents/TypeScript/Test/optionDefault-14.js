// optional params:
function getInformation(firstName, age) {
    // age? is an optional params here
    return firstName + " " + age;
}
console.log(getInformation("Tom"));
console.log(getInformation("Tom", 20));
// default parameters
function satDetails(name, msg) {
    if (msg === void 0) { msg = "welcome"; }
    // msg is default
    return msg + " " + name;
}
console.log(satDetails("EZ"));
console.log(satDetails("EZ", "hello"));
console.log(satDetails("EZ", undefined));

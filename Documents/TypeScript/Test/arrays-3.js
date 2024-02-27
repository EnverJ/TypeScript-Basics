var names = ["perter", "john", "todd"];
console.log(names[0]);
var score = [100, 99, 87, 45, 90];
score.forEach(function (e) {
    console.log(e);
});
// using generics
var empName = ["perter", "john", "todd"];
var isEmptyBindingElement = [1, 2, 3];
var empIno = [true, "ez", 2345];
var shows = ["GOAT", "Peaky Blinder", "When they see us"];
var babies = ["Ez", "Kud"];
// multi type array
var values = ["tom", 32, "never", 100];
var val = ["java", 4];
var plants = ["Saturn", 123];
var client = [
    { name: "ez", age: 12 },
    { name: "kud", age: 22 },
    { name: "ze", age: 11 },
];
console.table(client);
// first array declaration and init
var users;
users = ["java", "js", "lombok"];
//
var employee = ["tom", "todd", "tony"];
// iterate the array: use for loop
for (var i = 0; i < employee.length; i++) {
    console.log(employee[i]);
}
// for in loop
for (var e in employee) {
    console.log(e + ":" + employee[e]);
}

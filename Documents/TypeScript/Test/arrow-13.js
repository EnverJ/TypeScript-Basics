// Arrow function: => fat arrow  or lambda function
// Anonymous function: without a name
var info2 = function () {
    console.log("Hello ts");
};
(function () {
    console.log("hello info");
});
//
var print5 = function () { return console.log("hello"); };
info2();
print5();
// let add3 = (x: number, y: number): number => {
//   return x + y;
// };
// let sum0 = add3(10, 20);
// console.log(sum0);
// let sum4 = (x: number, y: number) => x + y;
// console.log(sum4(4, 5));
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        var _this = this;
        this.display = function () { return console.log(_this.firstName + " " + _this.lastName); };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var personInfo = new Person("tom", "Green");
personInfo.display();

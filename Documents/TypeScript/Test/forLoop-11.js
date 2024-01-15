// for loop:
// for loop
// for ... of loop
// for ... in loop
// while loop
// do ... while loop
// for loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
for (var j = 2; j <= 10; j += 2) {
    console.log(j);
}
// for of loop
var num4 = [10, 200, 3000, 40000];
for (var _i = 0, num4_1 = num4; _i < num4_1.length; _i++) {
    var n = num4_1[_i];
    console.log(n);
    if (n === 200) {
        console.log("Hi 200");
        break;
    }
}
// for ... in loop:
var num5 = [10, 20, 200, 1000];
for (var i in num5) {
    console.log(i); // this will print the index
    console.log(i + ":" + num5[i]);
}
var info = "Hello world";
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var k = info_1[_a];
    console.log(k);
}
// while loop
var p = 1;
while (p <= 10) {
    console.log(p);
    p++;
}
// use case for while: when number if iterations are not fixed
// 1. infinite scrolling:zomato, swiggy, Linkedin page
// 2. wait for page loading: 2,3,4,5,6 secs
// wait for the element on the page: 2,3,4
//4. calendar handling:
//5. webtable pagenations:1,2,3,4,5...next
// uaw case for for loop:
// when number if iterations are fixed
// dropdown: month: Jan to Dec:1 to 12
// do while loop
var x = 1;
do {
    console.log(x);
    x++;
} while (x <= 10);

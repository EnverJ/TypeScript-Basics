// Typescript provides the concpt of function overloading
// you can have multiple functional
// 1. with the same name
// 2. but, different parameters types and return type.
//3. however, the number of parameters should be same name
// need to implement this only once:
function add(a, b) {
    return a + b;
}
var s1 = add("hello", "world");
var s2 = add(2, 3);
var s3 = add(true, false);
console.log(s1);
console.log(s2);
console.log(s3);

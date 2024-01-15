// optional params:
function getInformation(firstName: string, age?: number): string {
  // age? is an optional params here
  return firstName + " " + age;
}
console.log(getInformation("Tom"));
console.log(getInformation("Tom", 20));

// default parameters
function satDetails(name: string, msg: string = "welcome"): string {
  // msg is default
  return msg + " " + name;
}
console.log(satDetails("EZ"));

console.log(satDetails("EZ", "hello"));
console.log(satDetails("EZ", undefined));

// TSC

// 1. using <>
//2. using as keyword

let totalBill: any = 123;
let finalBill = <number>totalBill + 1000;
console.log(finalBill);

let someValue: any = "Hello, this week automation";
let len = (someValue as string).length;
console.log(len);

let flag: any = true;
if (flag as boolean) {
  console.log("Hello TSC");
}

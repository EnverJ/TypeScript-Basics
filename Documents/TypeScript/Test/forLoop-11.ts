// for loop:
// for loop
// for ... of loop
// for ... in loop

// while loop
// do ... while loop

// for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let j = 2; j <= 10; j += 2) {
  console.log(j);
}

// for of loop
let num4 = [10, 200, 3000, 40000];
for (let n of num4) {
  console.log(n);
  if (n === 200) {
    console.log("Hi 200");
    break;
  }
}

// for ... in loop:
let num5 = [10, 20, 200, 1000];
for (let i in num5) {
  console.log(i); // this will print the index
  console.log(i + ":" + num5[i]);
}

let info = "Hello world";
for (let k of info) {
  console.log(k);
}

// while loop
let p = 1;
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
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= 10);

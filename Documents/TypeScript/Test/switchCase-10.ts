let day: string = "Saturday";
let dayOfWeek: string;
if (day === "Sunday") {
  dayOfWeek = "Sunday";
} else if ((day = "Monday")) {
  dayOfWeek = "Monday";
} else if ((day = "Tuesday")) {
  dayOfWeek = "Tuesday";
} else if ((day = "Wednesday")) {
  dayOfWeek = "Wednesday";
} else if ((day = "Thursday")) {
  dayOfWeek = "Thursday";
} else if ((day = "Friday")) {
  dayOfWeek = "Friday";
} else if ((day = "Saturday")) {
  dayOfWeek = "Saturday";
} else {
  dayOfWeek = "please enter a valid day";
}

console.log("Day of the week is " + dayOfWeek);

// if else go through each and every condition
// in switch case, it will directly jump to the condition

let myDay: string = "Wednesday";
switch (myDay.toLowerCase()) {
  case "sunday":
    console.log("sunday");
    break;
  case "monday":
    console.log("monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;
  case "wednesday":
    console.log("wednesday");
    break;
  case "thursday":
    console.log("thursday");
    break;
  case "friday":
    console.log("friday");
    break;
  case "saturday":
    console.log("saturday");
    break;

  default:
    console.log("Invalid day");
    break;
}

let marks: number = 100;

switch (marks) {
  case 100:
    console.log("perfect");
    break;
  case 10:
    console.log("not perfect");
    break;
  default:
    console.log("wrong marks!!!");
    break;
}

let flag4: boolean = true;
switch (flag4) {
  case true:
    console.log("true");
    break;

  default:
    break;
}

// enums
enum Browser3 {
  FireFox1 = "Firefox",
  Chrome1 = "Chrome",
  Edge = "Edge",
}

let BrowserName: string = Browser3.FireFox1;
switch (BrowserName) {
  case Browser3.FireFox1:
    console.log("Firefox1");
    break;
  case Browser3.Chrome1:
    console.log("Chrome1");
    break;
  case Browser3.Edge:
    console.log("Edge");
    break;

  default:
    console.log("Wrong browser");
    break;
}

// use case:
// 1. RBACK: ADMIN, SELLER PARTNER, VENDOR,CAT MANAGER
// 2, MULTI ENVIRONMENT: DEV, QA, STAGE, PRODUCTION

let position: string = "admin";
switch (position) {
  case "admin":
    console.log("admin");
    break;
  case "Seller":
    console.log("Seller");
    break;
  case "vendor":
    console.log("vendor");
    break;
  case "manager":
    console.log("Cat manager");

  default:
    console.log("Wrong value");
    break;
}

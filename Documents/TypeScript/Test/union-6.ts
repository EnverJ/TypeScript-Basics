let userId: string | number;
userId = 10001;
userId = "automation";

function getUserInfo(customerId: string | number) {
  if (typeof (customerId === "number")) return customerId + "enver";
  else if (typeof customerId === "string") {
    return +"_enver";
  }
}

console.log(getUserInfo(80001));
console.log(getUserInfo("automation"));

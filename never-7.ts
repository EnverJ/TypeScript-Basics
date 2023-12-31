// it will never return anything
let nothing: never; // i cannot anything to this value

function throwError(msg: string): never {
  throw new Error(msg);
}

//throwError("this is a never type");

function displayMsg(): never {
  while (true) {
    console.log("Welcome to Taj");
  }
}

displayMsg();

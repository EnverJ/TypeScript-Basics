// Enum: Enumerations: data types: hold the set of constance

// numeric
//string
//heterogenous

// numeric
enum Browser {
  Chrome,
  FireFox,
  Safari,
  Edge,
}
console.log(Browser.Chrome);
console.log(Browser);

enum Browser2 {
  FireFox,
  Safari,
  Edge,
  Chrome = getVersion("Chrome"),
}

function getVersion(browserName: string): number {
  if (browserName === "Chrome") {
    return 115;
  }
  return -1;
}
console.log(Browser2.Chrome);

console.log(Browser2.Safari);
console.log(Browser2);

// String Enum:
enum environments {
  DEV = "dev",
  QA = "qa",
  STAGE = "stage",
  PRODUCTION = "production",
}

console.log(environments);
console.log(environments.DEV);
console.log(environments["STAGE"]);

// heterogenous enum:  MULTIPLE SATA TYPES
enum Status {
  ACTIVE = "active",
  DEACTIVEE = 1,
  PENDING,
}

console.log(Status.ACTIVE);
console.log(Status.DEACTIVEE);
console.log(Status.PENDING);

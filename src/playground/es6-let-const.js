var nameVar = "Kyle";
var nameVar = "Harold";
console.log("nameVar", nameVar);

let nameLet = "Jackson";
nameLet = "Barker";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block scoping

const fullName = "Kyle Starrett";
let firstName, lastName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  lastName = fullName.split(" ")[1];
  console.log(firstName, lastName);
}

console.log(firstName);

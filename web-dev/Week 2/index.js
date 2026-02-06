//javascript is an interpreted language,jit
var favColor = "Blue";
const height = 170;
let likePizza = true;

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(4, 5));
console.log(sum(4, "Lavanya"));
function canVote(age) {
  if (age > 18) return true;
  else return false;
}
console.log(canVote(14));
console.log(canVote(22));

let user = {
  name: "Pushparaj",
  age: 21,
};
function greet(user) {
  console.log("Welcome, ", user.name);
  console.log("Your age is ", user.age);
}
greet(user);
let arr = [33, 4, 53, , 22, 23, 4, 2, 11, 2, 34, 4, 45, 67, 32, 2, 34];
function more(arr) {
  return arr > 18;
}
console.log(arr.filter(more));

const users = [
  {
    name: "Harkirat",
    age: 21,
  },
  {
    name: "raman",
    age: 22,
  },
  {
    name: "Lavanya",
    age: 18,
  },
];
function more(users) {
  return users.age > 18;
}
console.log(users.filter(more));
const users1 = [
  {
    name: "Harkirat",
    age: 21,
    gender: "M",
  },
  {
    name: "raman",
    age: 22,
    gender: "M",
  },
  {
    name: "Lavanya",
    age: 18,
    gender: "F",
  },
];
function ccheck(users) {
  return users.age > 18 && users.gender == "M";
}
console.log(users1.filter(ccheck));

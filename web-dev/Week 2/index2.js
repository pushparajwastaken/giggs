import fs from "fs";

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);
fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
function run() {
  console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");
function first() {
  console.log("First");
}
function second() {
  first();
  console.log("Second");
}
second();

let number = 7;
let hash = "#######";
while (number >= 1) {
  console.log(hash);
  number = number - 1;
  hash = "#".repeat(number);
}
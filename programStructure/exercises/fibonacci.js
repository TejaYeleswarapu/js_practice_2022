var num1 = 0;
var num2 = 1;
var sum = 0;
var count = 0;
var limit = 15;

console.log(num1);
console.log(num2);

while(count < limit-2){
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(sum);
    count++;
}
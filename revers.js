// Write a program that takes a number from the user and prints the 
// number that is formed by reversing the digits of the number.


const input= require("readline-sync")
let n = input.questionInt("enter the number: ")
let p= 0;
let i = 1;
while(n>=i){
    r=n%10;
    p=p*10+r;
    n=Math.floor(n/10);

}
console.log("revers = ",p)
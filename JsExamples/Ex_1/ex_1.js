let i = 1;
let sum = 0;

let n = window.prompt("Enter the number: ");
n = parseInt(n);
console.log(n);

while(i <= n){
    sum += i;
    i++;
}
document.write("Sum of first"+" "+n +" "+"natural number is :"+" "+sum)
let num = prompt("Enter the number: ");
num = parseInt(num);

let sum = 0;
document.write("The divisors are: ");
for(let i = 1; i < num; i++){
    if(num % i == 0){
        sum += i; 
        document.write("&nbsp;");
        document.write(i);
    }
}
document.write("<br>");
document.write("The sum of the dicisors are: "+sum);
document.write("<br>");
if(sum == num){
    document.write(num+" is a perfect number");
}
else{
    document.write(num+" is not a perfect number");
}
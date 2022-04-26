let num = prompt("Enter a number: ");
num = parseInt(num);

document.write("TThe Even numbers are: ");
let sum= 0;
for(let i = 1; i <= num;i++){
    if(i%2 == 0){
        sum += i;
        document.write(i+" ");
    }
}
document.write("<br>");
document.write("The sum of even numbers is: "+sum);
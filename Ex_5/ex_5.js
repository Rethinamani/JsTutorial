let n = prompt("Enter a number: ");
let num = parseInt(n);

let sum = 0,j = 1,i=0;

document.write("The odd numbers are: ");
while(true){
    if(i == num){
        break;
    }
    if(j %2 != 0){
        sum += j;
        document.write("\n");
        document.write(j);
        i++;
    }
    j++;
}
document.write("<br>");
document.write("The sum of odd numbers is: ");
document.write(sum);
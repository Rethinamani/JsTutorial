let num = prompt("Enter the number: ");
num = parseInt(num);

const temp = num;
let sum = 0;
while(num != 0){
    let rem = num % 10;
    sum += Math.pow(rem,3);
    num = parseInt(num/10);
}
if(sum == temp){
    document.write(temp+" is a armstrong number");
}
else{
    document.write(temp+" is not a armstrong number");
}

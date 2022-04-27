let num = prompt("Enter the number: ");
num = parseInt(num);

let result='';
const temp = num + ' '; 
while(num != 0){
    let rem = num % 10;
    result += rem;
    num = parseInt(num/10);
}
document.write(result);
document.write("<br>");
document.write(temp);
document.write("<br>");
if(result.localeCompare(temp)){
    document.write(temp+" is a palindome");
}
else{
    document.write(temp+" is not a palindome");
}

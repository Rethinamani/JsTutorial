let getInput = prompt("Enter an integer: ");
let num = parseInt(getInput);

let i = 1;
while(i <= num){
    document.write("Cube of Number "+i+" :"+i*i*i);
    i++;
    document.write("<br>");
}
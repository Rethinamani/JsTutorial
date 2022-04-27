let x = prompt("Enter the number: ");
x = parseInt(x);

let terms = prompt("Enter the number of terms: ");
terms = parseInt(terms);

document.write("The values of series are: ");
let sum = 0,m=1;
for(let i = 1; i <= terms; i++){
    let y;
    if(i%2 != 0){
        y = Math.pow(x,m);
        sum += y;
    }
    else{
        y = Math.pow(-x,m);
        sum += y;
    }
    m += 2;
    document.write("<br>");
    document.write(y);
}
document.write("<br>");
document.write("The sum is: "+ sum);
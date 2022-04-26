let n = prompt("Table to be calculated: ");
let num = parseInt(n);

for(let i = 1; i <= 10; i++){
    document.write(n+" "+"X"+" "+i+" "+"= "+ (n*i));
    document.write("<br>");
}
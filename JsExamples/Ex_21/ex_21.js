let n = prompt("Enter the number: ");
n = parseInt(n);

let x = 1,sum = 0;
document.write("The square natural upto "+n+" terms are :");
for(let i = 1; i <= n; i++){
    document.write("&nbsp;");
   let y = x*x;
   document.write(y);
   x++;
   sum += y;   
}
document.write("<br>");
document.write("The Sum of Square Natural Number upto "+n+" terms = "+sum );

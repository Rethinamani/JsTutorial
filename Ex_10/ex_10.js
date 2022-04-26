let rows = prompt("Enter the number of rows: ");
rows = parseInt(rows);

let i,j;
for(i = 1; i <= rows; i++){
    for(j = 1;j<= rows-i;j++){
        document.write("&nbsp;");
    }
    
    for(let k = 1; k <= i;k++)
    {
        document.write("* ");
    }
    document.write("<br>");
}

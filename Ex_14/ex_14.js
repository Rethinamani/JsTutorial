let rows = prompt("Enter the number of rows: ");
rows = parseInt(rows);
for(let i = 1; i <= rows; i++){
    for(let j=1;j<= rows-i;j++){
        document.write("&nbsp;");
    }
    for(let k=1;k<=i;k++){
        document.write(i+" ");
    }
    document.write("<br>");
}

let a = 1;
for(let i = 1; i<= 3; i++){
    for(let j=1;j<= 3-i;j++){
        document.write("\n");
        document.write("&nbsp;");
    }
    for(let k = 1; k<= a; k++){
        document.write("*");
    }
    a += 2;
    document.write("<br>");
    console.log("Hello");
}
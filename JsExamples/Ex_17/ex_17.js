let a = 1;
for(let i = 1; i<= 3; i++){
    for(let j=1;j<= 3-i;j++){
        document.write("&nbsp;");
    }
    for(let k = 1; k<= i; k++){
        document.write("* ");
    }
    a += 2;
    document.write("<br>");
    console.log("Hello");
}
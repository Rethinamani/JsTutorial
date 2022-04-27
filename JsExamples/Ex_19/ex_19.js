let p,q;
for(let i = 1; i<= 5;i++){
    if(i%2 == 0){
        p = 1;
        q=0;
    }
    else{
        p=0;
        q=1;
    }
    for(let j = 1; j<= i; j++){
        if(j%2==0){
            document.write(p);
        }
        else{
            document.write(q);
        }
        
        document.write("&nbsp;");
    }
    document.write("<br>");
}
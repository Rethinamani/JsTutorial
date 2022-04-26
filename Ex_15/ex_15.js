let x = prompt("Enter the value: ");
x = parseInt(x);

let y = 0,result = 1;
let terms = prompt("Enter the number of terms: ");
terms = parseInt(terms);

for(let i = 1; i <= terms; i++){
    let num = 2*i;
    y = Math.pow(x,num)/fact(num);
    console.log(y);
    if(i % 2 != 0){
        result -= y;
    }
    else{
        result += y;
    }
}

document.write(result.toFixed(5));

function fact(num){
    let fact = 1;
    for(let i = 1; i <= num ; i++){
        fact *= i;
    }
    return fact;
}


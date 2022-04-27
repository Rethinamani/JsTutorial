let start = prompt("Enter the starting point of range: ");
start = parseInt(start);

let end = prompt("Enter the ending point of range: ");
end = parseInt(end);

document.write("The perfect numbers btw given range are: ");
for(let i = start; i<= end; i++){
    let result = divSum(i);
    if(result == i){
        document.write(i+" ");
    }
}

function divSum(num){
    let sum = 0;
    for(let i = 1; i < num;i++){
        if(num % i == 0){
            sum += i;
        }
    }
    return sum;
}
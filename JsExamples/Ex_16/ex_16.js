let n = prompt("Enter the number: ");
n = parseInt(n);

let sum = 0;
for(let i = 1; i <= n; i++){
    sum += 1/(i);
}
document.write(sum.toFixed(5));
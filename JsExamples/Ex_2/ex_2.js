const a=[];
let j,sum = 0,avg;
for(let i = 0; i < 10;i++){
    j = prompt("Enter "+(parseInt(i)+1)+"st number:");
    a[i] = parseInt(j);
    sum += a[i];
    avg = parseFloat(sum/10).toFixed(5);
}
document.writeln("Sum is:"+" "+sum);
document.write("  Average is:"+" "+avg);
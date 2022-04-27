let num = prompt("Input the number or terms: ");
num = parseInt(num);

let x = 1,sum = 0;

 /*   console.log(9*1+0);//i=1
    console.log(9*10+9);//i=2
    console.log(9*100+99);//i=3
    console.log(9*1000+999);//i=4
    console.log(9*100000+9999);//i=5 */

for(let i= 1; i<= num ; i++){
    let y = 9 * x + (x-1);
    sum += y;
    document.write(y);
    document.write("&nbsp;");
    x *= 10;
}
document.write("<br>");
document.write("<br>");
document.write(sum);

var op = window.prompt("Press any of the operations (+ or - or * or / or %)")
var num1=window.prompt("Enter the first number....");
var num2 = window.prompt("Enter the second number....");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
switch(op){
    case '+':
        document.write(num1+num2);
        break;
    case '-':
        document.write(num1-num2);
        break;
    case '*':
        document.write(num1*num2);
        break;
    case '/':
        document.write(num1/num2);
        break;
    case '%':
        document.write(num1%num2);
        break;
    default:
        document.write("Enter Valid Operation");
        break;
}



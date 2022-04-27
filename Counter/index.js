let button = document.querySelectorAll("button");
let counter = document.getElementById("number");

console.log(button);
/*button[0].addEventListener("click",(e)=>{
    counter.innerText--;
})
button[1].addEventListener("click",(e)=>{
    counter.innerText = '0';
})
button[2].addEventListener("click",(e)=>{
    counter.innerText++;
})*/

/*button.forEach(function(item){
    item.addEventListener()
})*/
for(item of button){
    item.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case 'Decrease':
                counter.innerText--;
                break;
            case 'Reset':
                counter.innerText='0';
                break;
            case 'Increase':
                counter.innerText++;
                break;
            default:
                counter.innerText='Error'
        }
        if(counter.innerText > 0){
            counter.style.color='green';
        }
        else if(counter.innerText == 0){
            counter.style.color='black';
        }
        else{
            counter.style.color='red';
        }
    })
}
const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    randomNum = getRandom();
    console.log(randomNum)
    document.body.style.backgroundColor=randomNum;
    color.textContent = randomNum;
});

function getRandom(){
    let randomHex = '#';
    let num;
    for(let i = 0; i < 6 ; i++){
        num = Math.floor(Math.random()*colors.length);
        randomHex += colors[num];
    }
    return randomHex;
}
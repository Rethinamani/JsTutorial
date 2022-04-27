const colors = ["red","green","blue","yellow","orange","violet","skyblue"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
btn.addEventListener("click",function(){
    randomNum = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor=colors[randomNum];
    color.textContent=colors[randomNum];
});
